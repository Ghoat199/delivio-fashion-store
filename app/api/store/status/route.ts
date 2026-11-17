import { NextResponse } from "next/server";
import { getWooCommerceBaseUrl } from "../../../../lib/woocommerce";

/**
 * Public, read-only connection check for the storefront.
 * Never returns the configured backend URL or any credentials.
 */
export async function GET() {
  let baseUrl: string | null;

  try {
    baseUrl = getWooCommerceBaseUrl();
  } catch {
    return NextResponse.json(
      { status: "invalid_configuration", connected: false },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!baseUrl) {
    return NextResponse.json(
      { status: "not_configured", connected: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const response = await fetch(
      `${baseUrl}/wp-json/wc/store/v1/products?per_page=1`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { status: "backend_unavailable", connected: false },
        { headers: { "Cache-Control": "no-store" } },
      );
    }

    return NextResponse.json(
      { status: "connected", connected: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { status: "backend_unreachable", connected: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
