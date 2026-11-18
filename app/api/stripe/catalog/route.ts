import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (
    process.env.STRIPE_TEST_CHECKOUT_ENABLED !== "true" ||
    process.env.CONTEXT === "production" ||
    !secretKey ||
    !secretKey.startsWith("sk_test_")
  ) {
    return NextResponse.json({ products: [] }, { status: 200 });
  }

  try {
    const stripe = new Stripe(secretKey);
    const listed = await stripe.products.list({ active: true, limit: 100 });
    const products = (await Promise.all(listed.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id, active: true, limit: 100 });
      return prices.data
        .filter((price) => price.type === "one_time" && price.currency === "eur" && price.unit_amount !== null)
        .map((price) => ({
          productId: product.id,
          priceId: price.id,
          name: product.name,
          description: product.description,
          image: product.images[0] ?? null,
          amount: price.unit_amount,
          currency: price.currency,
        }));
    }))).flat();

    return NextResponse.json({ products }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Stripe test catalogue could not be loaded:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Stripe-Katalog konnte nicht geladen werden." }, { status: 502 });
  }
}
