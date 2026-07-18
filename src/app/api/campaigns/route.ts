import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await requireAdmin();
    const campaigns = await prisma.campaign.findMany({
      include: { client: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ campaigns });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
    const body = await req.json();
    const {
      name, platform, status, budget, spent,
      impressions, clicks, leads, conversions,
      startDate, endDate, clientId,
    } = body;

    if (!name || !platform || !clientId) {
      return NextResponse.json(
        { error: "Name, platform, and client are required" },
        { status: 400 }
      );
    }

    const campaign = await prisma.campaign.create({
      data: {
        name,
        platform,
        status: status || "active",
        budget: budget ? parseFloat(budget) : null,
        spent: spent ? parseFloat(spent) : 0,
        impressions: impressions ? parseInt(impressions) : 0,
        clicks: clicks ? parseInt(clicks) : 0,
        leads: leads ? parseInt(leads) : 0,
        conversions: conversions ? parseInt(conversions) : 0,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        clientId,
      },
    });

    return NextResponse.json({ success: true, campaign }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create campaign" },
      { status: 500 }
    );
  }
}
