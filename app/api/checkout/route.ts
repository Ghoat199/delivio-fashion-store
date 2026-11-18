import { NextResponse } from "next/server";

// Live checkout remains intentionally closed until real supplier products,
// verified variants, tax/shipping settings and payment methods are configured.
export async function POST() {
  return NextResponse.json(
    { error: "Der Shop befindet sich noch in Vorbereitung. Bestellungen sind derzeit noch nicht möglich." },
    { status: 503 }
  );
}
