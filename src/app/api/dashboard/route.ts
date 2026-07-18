import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  try {
    await requireAdmin();

    const [totalClients, totalLeads, totalCampaigns, activeCampaigns] =
      await Promise.all([
        prisma.client.count(),
        prisma.lead.count(),
        prisma.campaign.count(),
        prisma.campaign.count({ where: { status: "active" } }),
      ]);

    const recentLeads = await prisma.lead.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
    });

    const campaignStats = await prisma.campaign.aggregate({
      _sum: { budget: true, spent: true, impressions: true, clicks: true, leads: true, conversions: true },
    });

    const leadsBySource = await prisma.lead.groupBy({
      by: ["source"],
      _count: true,
    });

    return NextResponse.json({
      stats: {
        totalClients,
        totalLeads,
        totalCampaigns,
        activeCampaigns,
        totalBudget: campaignStats._sum.budget || 0,
        totalSpent: campaignStats._sum.spent || 0,
        totalImpressions: campaignStats._sum.impressions || 0,
        totalClicks: campaignStats._sum.clicks || 0,
        totalCampaignLeads: campaignStats._sum.leads || 0,
        totalConversions: campaignStats._sum.conversions || 0,
      },
      recentLeads,
      leadsBySource: leadsBySource.map((s) => ({
        source: s.source || "unknown",
        count: s._count,
      })),
    });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
