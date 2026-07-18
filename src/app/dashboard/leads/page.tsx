"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  business: string | null;
  service: string | null;
  message: string | null;
  source: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  clientId: string | null;
}

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => {
        if (!res.ok) { router.push("/login"); return null; }
        return res.json();
      })
      .then(() => {
        fetch("/api/leads")
          .then((res) => res.json())
          .then((d) => { setLeads(d.leads || []); setLoading(false); })
          .catch(() => setLoading(false));
      })
      .catch(() => router.push("/login"));
  }, [router]);

  async function updateLeadStatus(id: string, status: string) {
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l))
    );
    if (selectedLead?.id === id) {
      setSelectedLead((prev) => (prev ? { ...prev, status } : null));
    }
  }

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const statusCounts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    converted: leads.filter((l) => l.status === "converted").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-[#94A3B8]">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white font-['Space_Grotesk']">Leads</h1>
        <span className="text-[#94A3B8] text-sm">{leads.length} total leads</span>
      </div>

      {/* Status filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(["all", "new", "contacted", "converted", "lost"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === s
                ? "bg-[#F59E0B] text-[#05070C]"
                : "bg-[#10141F] text-[#94A3B8] hover:bg-white/5"
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)} ({statusCounts[s]})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads list */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.length === 0 ? (
            <div className="bg-[#10141F] border border-white/5 rounded-xl p-8 text-center text-[#94A3B8]">
              No leads found
            </div>
          ) : (
            filtered.map((lead) => (
              <div
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className={`bg-[#10141F] border rounded-xl p-4 cursor-pointer transition-colors ${
                  selectedLead?.id === lead.id
                    ? "border-[#F59E0B]/30"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{lead.name}</p>
                    <p className="text-[#94A3B8] text-sm">{lead.phone} {lead.email ? `• ${lead.email}` : ""}</p>
                    {lead.service && (
                      <p className="text-[#94A3B8] text-xs mt-1">Service: {lead.service}</p>
                    )}
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
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
                    <span className="text-xs text-[#475569]">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Lead detail panel */}
        <div className="lg:col-span-1">
          {selectedLead ? (
            <div className="bg-[#10141F] border border-white/5 rounded-xl p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-white mb-4">Lead Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#94A3B8] mb-1">Name</p>
                  <p className="text-white">{selectedLead.name}</p>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] mb-1">Phone</p>
                  <p className="text-white">{selectedLead.phone}</p>
                </div>
                {selectedLead.email && (
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-1">Email</p>
                    <p className="text-white">{selectedLead.email}</p>
                  </div>
                )}
                {selectedLead.business && (
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-1">Business</p>
                    <p className="text-white">{selectedLead.business}</p>
                  </div>
                )}
                {selectedLead.service && (
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-1">Service</p>
                    <p className="text-white">{selectedLead.service}</p>
                  </div>
                )}
                {selectedLead.message && (
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-1">Message</p>
                    <p className="text-white">{selectedLead.message}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#94A3B8] mb-1">Source</p>
                  <p className="text-white capitalize">{selectedLead.source || "Unknown"}</p>
                </div>
                {(selectedLead.utmSource || selectedLead.utmCampaign) && (
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-1">Campaign Attribution</p>
                    <div className="space-y-1">
                      {selectedLead.utmSource && (
                        <p className="text-white text-sm">Source: {selectedLead.utmSource}</p>
                      )}
                      {selectedLead.utmMedium && (
                        <p className="text-white text-sm">Medium: {selectedLead.utmMedium}</p>
                      )}
                      {selectedLead.utmCampaign && (
                        <p className="text-white text-sm">Campaign: {selectedLead.utmCampaign}</p>
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#94A3B8] mb-2">Update Status</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(["new", "contacted", "converted", "lost"] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => updateLeadStatus(selectedLead.id, s)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          selectedLead.status === s
                            ? "bg-[#F59E0B] text-[#05070C]"
                            : "bg-[#05070C] text-[#94A3B8] hover:bg-white/5 border border-white/5"
                        }`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-[#475569]">
                    Created: {new Date(selectedLead.createdAt).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#10141F] border border-white/5 rounded-xl p-8 text-center text-[#94A3B8]">
              Select a lead to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
