import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!secretKey || !secretKey.startsWith("sk_test_") || !webhookSecret || !signature) {
    return NextResponse.json({ error: "Stripe-Testwebhook ist nicht vollständig konfiguriert." }, { status: 400 });
  }

  const rawBody = await request.text();
  const stripe = new Stripe(secretKey);

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Ungültige Stripe-Signatur." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.metadata?.environment === "test" && session.payment_status === "paid") {
        // Test-only acknowledgement. No customer order is stored or sent to fulfillment yet.
        console.info("DELIVIO Stripe test payment verified", {
          eventId: event.id,
          sessionId: session.id,
          productId: session.metadata.test_product_id ?? "unknown",
        });
      }
      break;
    }
    case "checkout.session.async_payment_failed":
      console.info("DELIVIO Stripe test payment failed", { eventId: event.id });
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
