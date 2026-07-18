import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await requireAdmin();
    const clients = await prisma.client.findMany({
      include: { campaigns: true, leads: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ clients });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
    const body = await req.json();
    const { name, email, phone, business, status, notes } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        business: business || "",
        status: status || "active",
        notes: notes || null,
      },
    });

    return NextResponse.json({ success: true, client }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create client" },
      { status: 500 }
    );
  }
}
