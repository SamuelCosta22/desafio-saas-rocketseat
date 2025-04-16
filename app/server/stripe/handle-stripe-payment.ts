import { db } from "@/app/lib/firebase";
import "server-only";
import Stripe from "stripe";

export async function handleStripePayment(
  event: Stripe.CheckoutSessionCompletedEvent
) {
  if (event.data.object.payment_status === "paid") {
    console.log(
      "Pagamento realizado com sucesso! Enviar um email ao usuário e liberar seu acesso."
    );
    const metadata = event.data.object.metadata;
    const userId = metadata?.userId;

    if (!userId) {
      console.error("User ID not found!");
      return;
    }

    await db.collection("users").doc(userId).update({
      stripeSubcriptionId: event.data.object.subscription,
      subscriptionStatus: "active",
    });
  }
}
