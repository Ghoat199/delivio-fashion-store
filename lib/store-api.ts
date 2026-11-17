/**
 * Browser client for the same-origin WooCommerce Store API proxy.
 *
 * This module is intentionally not wired into the live cart yet. The current
 * storefront remains in preview mode until a real WooCommerce backend,
 * product/variation mapping, shipping rules and payment providers are ready.
 */

export type StoreApiError = Error & {
  status?: number;
  data?: unknown;
};

export type StoreApiClient = {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body?: unknown): Promise<T>;
  put<T>(path: string, body?: unknown): Promise<T>;
  delete<T>(path: string, body?: unknown): Promise<T>;
};

let cartToken: string | null = null;
let nonce: string | null = null;

function updateSessionHeaders(response: Response) {
  const nextCartToken = response.headers.get("Cart-Token");
  const nextNonce = response.headers.get("Nonce");
  if (nextCartToken) cartToken = nextCartToken;
  if (nextNonce) nonce = nextNonce;
}

async function request<T>(path: string, method: string, body?: unknown): Promise<T> {
  const headers = new Headers({ Accept: "application/json" });
  if (body !== undefined) headers.set("Content-Type", "application/json");
  if (cartToken) headers.set("Cart-Token", cartToken);
  if (nonce) headers.set("Nonce", nonce);

  const response = await fetch(`/api/store/${path.replace(/^\/+/, "")}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
    credentials: "same-origin",
  });

  updateSessionHeaders(response);

  const data: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data && typeof data.message === "string"
        ? data.message
        : data && typeof data === "object" && "error" in data && typeof data.error === "string"
          ? data.error
          : `Store request failed (${response.status}).`;
    const error = new Error(message) as StoreApiError;
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data as T;
}

export const storeApi: StoreApiClient = {
  get: <T>(path: string) => request<T>(path, "GET"),
  post: <T>(path: string, body?: unknown) => request<T>(path, "POST", body),
  put: <T>(path: string, body?: unknown) => request<T>(path, "PUT", body),
  delete: <T>(path: string, body?: unknown) => request<T>(path, "DELETE", body),
};

/** Reset in-memory Store API session state, for example after an explicit cart reset. */
export function resetStoreApiSession() {
  cartToken = null;
  nonce = null;
}
