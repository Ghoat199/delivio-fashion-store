import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (
    process.env.STRIPE_TEST_CHECKOUT_ENABLED !== "true" ||
    process.env.CONTEXT === "production"
  ) {
    return NextResponse.json({ error: "Der Stripe-Testcheckout ist hier nicht freigeschaltet." }, { status: 503 });
  }

  if (!secretKey || !secretKey.startsWith("sk_test_")) {
    return NextResponse.json({ error: "Es ist kein gültiger Stripe-Testschlüssel hinterlegt." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const priceId = (body as { priceId?: unknown })?.priceId;
  const quantity = (body as { quantity?: unknown })?.quantity;

  if (typeof priceId !== "string" || !priceId.startsWith("price_")) {
    return NextResponse.json({ error: "Ungültiger Stripe-Preis." }, { status: 400 });
  }
  if (!Number.isInteger(quantity) || (quantity as number) < 1 || (quantity as number) > 5) {
    return NextResponse.json({ error: "Die Testmenge muss zwischen 1 und 5 liegen." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const baseUrl = process.env.DEPLOY_PRIME_URL || process.env.URL || new URL(request.url).origin;

  try {
    const price = await stripe.prices.retrieve(priceId);
    if (!price.active || price.type !== "one_time" || price.currency !== "eur" || price.unit_amount === null) {
      return NextResponse.json({ error: "Dieser Preis ist nicht als aktiver EUR-Einmalkauf verfügbar." }, { status: 400 });
    }

    const productId = typeof price.product === "string" ? price.product : price.product.id;
    const product = await stripe.products.retrieve(productId);
    if (!product.active) {
      return NextResponse.json({ error: "Dieser Artikel ist nicht aktiv." }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ quantity: quantity as number, price: price.id }],
      shipping_address_collection: { allowed_countries: ["DE"] },
      shipping_options: [{
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 490, currency: "eur" },
          display_name: "Versand Deutschland",
        },
      }],
      success_url: `${baseUrl}/stripe-test/return?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#stripe-kollektion`,
      metadata: {
        environment: "test",
        stripe_product_id: product.id,
        stripe_price_id: price.id,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe hat keine Checkout-Adresse zurückgegeben." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe test checkout creation failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Der Testcheckout konnte gerade nicht erstellt werden." }, { status: 502 });
  }
}
