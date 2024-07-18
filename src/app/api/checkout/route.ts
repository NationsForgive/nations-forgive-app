import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

let environment = new paypal.core.SandboxEnvironment(
  "AakmnZiH8p1Z65aHNsHbyf-xP7D1FYot0jjhYDuCnpe4DBqNuwEr5A0zRRQgKiSrkjtcypI17t58ueCy",
  "EDhqv5C1s5GzNQthOPEzXK1CuRPzLeOUG37ScSDj-XH0JTF2niMA4JHOEmKmEIrd1SZJL7BEzkWIMLdw"
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
