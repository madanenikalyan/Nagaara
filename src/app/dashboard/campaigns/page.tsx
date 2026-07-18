"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Campaign {
  id: string;
  name: string;
  platform: string;
  status: string;
  budget: number | null;
  spent: number | null;
  impressions: number | null;
  clicks: number | null;
  leads: number | null;
  conversions: number | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  client: { id: string; name: string };
}

interface Client {
  id: string;
  name: string;
}

export default function CampaignsPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editCampaign, setEditCampaign] = useState<Campaign | null>(null);
  const [form, setForm] = useState({
    name: "",
    platform: "meta",
    status: "active",
    budget: "",
    spent: "",
    impressions: "",
    clicks: "",
    leads: "",
    conversions: "",
    startDate: "",
    endDate: "",
    clientId: "",
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/campaigns").then((r) => r.json()),
      fetch("/api/clients").then((r) => r.json()),
    ])
      .then(([campaignData, clientData]) => {
        if (!campaignData.campaigns) { router.push("/login"); return; }
        setCampaigns(campaignData.campaigns || []);
        setClients(clientData.clients || []);
        setLoading(false);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  function openAdd() {
    setEditCampaign(null);
    setForm({
      name: "", platform: "meta", status: "active",
      budget: "", spent: "", impressions: "", clicks: "", leads: "", conversions: "",
      startDate: "", endDate: "", clientId: "",
    });
    setShowForm(true);
  }

  function openEdit(c: Campaign) {
    setEditCampaign(c);
    setForm({
      name: c.name,
      platform: c.platform,
      status: c.status,
      budget: c.budget?.toString() || "",
      spent: c.spent?.toString() || "",
      impressions: c.impressions?.toString() || "",
      clicks: c.clicks?.toString() || "",
      leads: c.leads?.toString() || "",
      conversions: c.conversions?.toString() || "",
      startDate: c.startDate ? c.startDate.split("T")[0] : "",
      endDate: c.endDate ? c.endDate.split("T")[0] : "",
      clientId: c.client.id,
    });
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editCampaign ? `/api/campaigns/${editCampaign.id}` : "/api/campaigns";
    const method = editCampaign ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setShowForm(false);
    const res = await fetch("/api/campaigns");
    const d = await res.json();
    setCampaigns(d.campaigns || []);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this campaign?")) return;
    await fetch(`/api/campaigns/${id}`, { method: "DELETE" });
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  }

  const platformColors: Record<string, string> = {
    meta: "bg-blue-500/10 text-blue-400",
    google: "bg-green-500/10 text-green-400",
    youtube: "bg-red-500/10 text-red-400",
    other: "bg-white/5 text-[#94A3B8]",
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-[#94A3B8]">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white font-['Space_Grotesk']">Campaigns</h1>
        <button
          onClick={openAdd}
          className="bg-[#F59E0B] text-[#05070C] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F59E0B]/90 transition-colors"
        >
          + Add Campaign
        </button>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#10141F] border border-white/10 rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold text-white mb-4">
              {editCampaign ? "Edit Campaign" : "Add Campaign"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1">Campaign Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  placeholder="e.g. Meta Ads - July 2024"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Client *</label>
                  <select
                    value={form.clientId}
                    onChange={(e) => setForm({ ...form, clientId: e.target.value })}
                    required
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  >
                    <option value="">Select Client</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Platform *</label>
                  <select
                    value={form.platform}
                    onChange={(e) => setForm({ ...form, platform: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  >
                    <option value="meta">Meta (Facebook/Instagram)</option>
                    <option value="google">Google Ads</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Budget (₹)</label>
                  <input
                    type="number"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Spent (₹)</label>
                  <input
                    type="number"
                    value={form.spent}
                    onChange={(e) => setForm({ ...form, spent: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Impressions</label>
                  <input
                    type="number"
                    value={form.impressions}
                    onChange={(e) => setForm({ ...form, impressions: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Clicks</label>
                  <input
                    type="number"
                    value={form.clicks}
                    onChange={(e) => setForm({ ...form, clicks: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Leads Generated</label>
                  <input
                    type="number"
                    value={form.leads}
                    onChange={(e) => setForm({ ...form, leads: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Conversions</label>
                  <input
                    type="number"
                    value={form.conversions}
                    onChange={(e) => setForm({ ...form, conversions: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Start Date</label>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">End Date</label>
                  <input
                    type="date"
                    value={form.endDate}
                    onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#F59E0B] text-[#05070C] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F59E0B]/90 transition-colors"
                >
                  {editCampaign ? "Update" : "Add Campaign"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-white/5 text-[#94A3B8] px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Campaigns list */}
      {campaigns.length === 0 ? (
        <div className="bg-[#10141F] border border-white/5 rounded-xl p-8 text-center text-[#94A3B8]">
          No campaigns yet. Add your first campaign to start tracking.
        </div>
      ) : (
        <div className="space-y-3">
          {campaigns.map((c) => (
            <div
              key={c.id}
              className="bg-[#10141F] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-medium">{c.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${platformColors[c.platform] || platformColors.other}`}>
                      {c.platform}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        c.status === "active"
                          ? "bg-green-500/10 text-green-400"
                          : c.status === "paused"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-white/5 text-[#94A3B8]"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-sm mb-2">Client: {c.client.name}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-3">
                    {[
                      { label: "Budget", value: c.budget ? `₹${c.budget.toLocaleString()}` : "—" },
                      { label: "Spent", value: c.spent ? `₹${c.spent.toLocaleString()}` : "—" },
                      { label: "Impressions", value: c.impressions?.toLocaleString() || "—" },
                      { label: "Clicks", value: c.clicks?.toLocaleString() || "—" },
                      { label: "Leads", value: c.leads?.toString() || "—" },
                    ].map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-[#475569]">{m.label}</p>
                        <p className="text-white text-sm font-medium">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEdit(c)}
                    className="text-[#94A3B8] hover:text-white text-sm px-3 py-1 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-[#94A3B8] hover:text-red-400 text-sm px-3 py-1 rounded-lg hover:bg-red-500/5 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
