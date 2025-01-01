import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export async function POST(req) {
  try {
    const { id, productName, price, quantity } = await req.json();

    let parameter = {
      transaction_details: {
        order_id: id,
        gross_amount: price * quantity,
      },
      item_details: [
        {
          name: productName,
          price: price,
          quantity: quantity,
        },
      ],
    };

    const token = await snap.createTransactionToken(parameter);
    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.error("Error creating token:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create transaction token" }),
      { status: 500 }
    );
  }
}
