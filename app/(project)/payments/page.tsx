"use client";

import { useStripe } from "@/app/hooks/useStripe";

export default function Payments() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <h1 className="text-4xl font-bold">Pagamentos</h1>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => createPaymentStripeCheckout({ testId: "123" })}
      >
        Criar Pagamento Stripe
      </button>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={() => createSubscriptionStripeCheckout({ testId: "123" })}
      >
        Criar Assinatura Stripe
      </button>
      <button
        className="border rounded-md px-1 cursor-pointer"
        onClick={handleCreateStripePortal}
      >
        Criar Portal de Pagamentos
      </button>
    </div>
  );
}
