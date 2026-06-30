import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";

type OrderLine = { id: string; qty: number };
type OrderPayload = {
  name?: string;
  phone?: string;
  district?: string;
  address?: string;
  notes?: string;
  lines?: OrderLine[];
};

/**
 * Mock order endpoint for the demo deployment.
 * No persistence — validates the payload, logs it server-side, and returns a
 * mock confirmation. Swap this out for Formspree or a real handler later.
 */
export async function POST(request: Request) {
  let payload: OrderPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, phone, district, address, lines } = payload;

  if (!name || !phone || !district || !address) {
    return NextResponse.json(
      { ok: false, error: "Please complete every required field." },
      { status: 422 }
    );
  }

  if (!lines || lines.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Your cart is empty." },
      { status: 422 }
    );
  }

  const subtotal = lines.reduce((sum, line) => {
    const product = PRODUCTS.find((p) => p.id === line.id);
    return sum + (product ? product.priceNPR * line.qty : 0);
  }, 0);

  const orderId = `SR-${Date.now().toString(36).toUpperCase()}`;

  // Demo: log to the server console in lieu of real persistence.
  console.log("[Sherpa Reserve] New demo order", {
    orderId,
    name,
    phone,
    district,
    subtotal,
    lines,
  });

  return NextResponse.json({
    ok: true,
    orderId,
    subtotal,
    message: "Demo order received. No payment was taken and nothing was stored.",
  });
}
