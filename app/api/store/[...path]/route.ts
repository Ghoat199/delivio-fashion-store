import { NextRequest, NextResponse } from "next/server";
import { getWooCommerceStoreApiUrl } from "../../../../lib/woocommerce";

type RouteContext = { params: Promise<{ path: string[] }> };

function isAllowedEndpoint(path: string, method: string): boolean {
  if (path === "products" || /^products\/\d+$/.test(path)) return method === "GET";
  if (path === "cart") return method === "GET";
  if (path === "cart/items") return ["GET", "POST", "DELETE"].includes(method);
  if (/^cart\/items\/[^/]+$/.test(path)) return ["GET", "POST", "PUT", "DELETE"].includes(method);
  if (["cart/add-item", "cart/remove-item", "cart/update-item", "cart/apply-coupon", "cart/remove-coupon", "cart/update-customer", "cart/select-shipping-rate"].includes(path)) return method === "POST";
  if (path === "cart/coupons") return ["GET", "POST", "DELETE"].includes(method);
  if (path === "checkout") return ["GET", "POST", "PUT"].includes(method);
  if (/^checkout\/\d+$/.test(path)) return method === "POST";
  return false;
}

async function handle(request: NextRequest, context: RouteContext) {
  if (process.env.ENABLE_WOOCOMMERCE_STORE_API !== "true") {
    return NextResponse.json({ error: "Der Shop ist noch nicht für Bestellungen freigeschaltet." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }

  const { path } = await context.params;
  const endpoint = path.join("/");
  if (!isAllowedEndpoint(endpoint, request.method)) {
    return NextResponse.json({ error: "WooCommerce endpoint or method is not allowed." }, { status: 404 });
  }

  let apiUrl: string | null;
  try {
    apiUrl = getWooCommerceStoreApiUrl(endpoint);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid WooCommerce configuration." }, { status: 500 });
  }
  if (!apiUrl) {
    return NextResponse.json({ error: "WooCommerce is not connected yet." }, { status: 503 });
  }

  const target = new URL(apiUrl);
  request.nextUrl.searchParams.forEach((value, key) => target.searchParams.append(key, value));

  const headers = new Headers({ Accept: "application/json" });
  const cartToken = request.headers.get("Cart-Token");
  const nonce = request.headers.get("Nonce");
  if (cartToken) headers.set("Cart-Token", cartToken);
  if (nonce) headers.set("Nonce", nonce);

  const hasBody = !["GET", "HEAD"].includes(request.method);
  if (hasBody) headers.set("Content-Type", request.headers.get("Content-Type") || "application/json");

  try {
    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: hasBody ? await request.text() : undefined,
      cache: "no-store",
      redirect: "manual",
    });

    const responseHeaders = new Headers({
      "Content-Type": upstream.headers.get("Content-Type") || "application/json",
      "Cache-Control": "no-store",
    });
    for (const headerName of ["Cart-Token", "Nonce", "Set-Cookie"]) {
      const value = upstream.headers.get(headerName);
      if (value) responseHeaders.set(headerName, value);
    }

    return new NextResponse(upstream.body, { status: upstream.status, headers: responseHeaders });
  } catch {
    return NextResponse.json({ error: "Could not reach the WooCommerce server." }, { status: 502 });
  }
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const DELETE = handle;
