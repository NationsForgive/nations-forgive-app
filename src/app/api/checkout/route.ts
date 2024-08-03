import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

let environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID as string,
  process.env.PAYPAL_CLIENT_SECRET as string
);
let client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request: Request) {
  const requestBody = await request.json();
  const paypalRequest = new paypal.orders.OrdersCreateRequest();

  paypalRequest.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: requestBody.amount,
        },
      },
    ],
  });

  const response = await client.execute(paypalRequest);

  return NextResponse.json({
    id: response.result.id,
  });
}
