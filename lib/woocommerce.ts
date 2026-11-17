/**
 * Server-side configuration for the WooCommerce Store API.
 * Never expose WooCommerce admin credentials or REST API secrets to the browser.
 */
export function getWooCommerceBaseUrl(): string | null {
  const configuredUrl = process.env.WOOCOMMERCE_URL?.trim();
  if (!configuredUrl) return null;

  let parsed: URL;
  try {
    parsed = new URL(configuredUrl);
  } catch {
    throw new Error("WOOCOMMERCE_URL must be a valid absolute URL.");
  }

  const isLocalhost = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  if (parsed.protocol !== "https:" && !isLocalhost) {
    throw new Error("WOOCOMMERCE_URL must use HTTPS outside localhost.");
  }
  if (parsed.username || parsed.password) {
    throw new Error("Do not put credentials in WOOCOMMERCE_URL.");
  }

  return parsed.toString().replace(/\/+$/, "");
}

export function getWooCommerceStoreApiUrl(path: string): string | null {
  const baseUrl = getWooCommerceBaseUrl();
  if (!baseUrl) return null;
  return baseUrl + "/wp-json/wc/store/v1/" + path.replace(/^\/+/, "");
}
