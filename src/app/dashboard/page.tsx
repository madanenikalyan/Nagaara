"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface DashboardData {
  stats: {
    totalClients: number;
    totalLeads: number;
    totalCampaigns: number;
    activeCampaigns: number;
    totalBudget: number;
    totalSpent: number;
    totalImpressions: number;
    totalClicks: number;
    totalCampaignLeads: number;
    totalConversions: number;
  };
  recentLeads: Array<{
    id: string;
    name: string;
    phone: string;
    email: string | null;
    service: string | null;
    source: string | null;
    status: string;
    createdAt: string;
  }>;
  leadsBySource: Array<{ source: string; count: number }>;
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => {
        if (!res.ok) {
          router.push("/login");
          return null;
        }
        return res.json();
      })
      .then((d) => {
        if (d) setData(d);
        setLoading(false);
      })
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[#94A3B8]">Loading...</div>
      </div>
    );
  }

  if (!data) return null;

  const { stats, recentLeads, leadsBySource } = data;

  const statCards = [
    { label: "Total Clients", value: stats.totalClients, icon: "👥" },
    { label: "Total Leads", value: stats.totalLeads, icon: "📋" },
    { label: "Active Campaigns", value: stats.activeCampaigns, icon: "📢" },
    {
      label: "Total Budget",
      value: `₹${stats.totalBudget.toLocaleString()}`,
      icon: "💰",
    },
    {
      label: "Total Spent",
      value: `₹${stats.totalSpent.toLocaleString()}`,
      icon: "💸",
    },
    { label: "Impressions", value: stats.totalImpressions.toLocaleString(), icon: "👁️" },
    { label: "Clicks", value: stats.totalClicks.toLocaleString(), icon: "🖱️" },
    { label: "Conversions", value: stats.totalConversions, icon: "🎯" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-8">
        Dashboard Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-[#10141F] border border-white/5 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{card.icon}</span>
            </div>
            <p className="text-2xl font-bold text-white">{card.value}</p>
            <p className="text-sm text-[#94A3B8] mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads by Source */}
        <div className="bg-[#10141F] border border-white/5 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Leads by Source</h2>
          {leadsBySource.length === 0 ? (
            <p className="text-[#94A3B8] text-sm">No leads yet</p>
          ) : (
            <div className="space-y-3">
              {leadsBySource.map((s) => (
                <div key={s.source} className="flex items-center justify-between">
                  <span className="text-[#94A3B8] capitalize">{s.source}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-[#05070C] rounded-full h-2">
                      <div
                        className="bg-[#F59E0B] h-2 rounded-full"
                        style={{
                          width: `${Math.min((s.count / stats.totalLeads) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium w-8 text-right">
                      {s.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Leads */}
        <div className="bg-[#10141F] border border-white/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Leads</h2>
            <a href="/dashboard/leads" className="text-sm text-[#F59E0B] hover:underline">
              View All
            </a>
          </div>
          {recentLeads.length === 0 ? (
            <p className="text-[#94A3B8] text-sm">No leads yet</p>
          ) : (
            <div className="space-y-3">
              {recentLeads.slice(0, 5).map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <div>
                    <p className="text-white text-sm font-medium">{lead.name}</p>
                    <p className="text-[#94A3B8] text-xs">{lead.phone}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        lead.status === "new"
                          ? "bg-blue-500/10 text-blue-400"
                          : lead.status === "contacted"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : lead.status === "converted"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
