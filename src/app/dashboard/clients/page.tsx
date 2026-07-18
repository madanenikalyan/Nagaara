"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  status: string;
  notes: string | null;
  createdAt: string;
  campaigns: Array<{ id: string; name: string; status: string }>;
  leads: Array<{ id: string; status: string }>;
}

export default function ClientsPage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState<Client | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    status: "active",
    notes: "",
  });

  useEffect(() => {
    fetch("/api/clients")
      .then((res) => {
        if (!res.ok) { router.push("/login"); return null; }
        return res.json();
      })
      .then((d) => { if (d) setClients(d.clients || []); setLoading(false); })
      .catch(() => { router.push("/login"); });
  }, [router]);

  function openAdd() {
    setEditClient(null);
    setForm({ name: "", email: "", phone: "", business: "", status: "active", notes: "" });
    setShowForm(true);
  }

  function openEdit(client: Client) {
    setEditClient(client);
    setForm({
      name: client.name,
      email: client.email,
      phone: client.phone,
      business: client.business,
      status: client.status,
      notes: client.notes || "",
    });
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editClient ? `/api/clients/${editClient.id}` : "/api/clients";
    const method = editClient ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setShowForm(false);
    const res = await fetch("/api/clients");
    const d = await res.json();
    setClients(d.clients || []);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this client?")) return;
    await fetch(`/api/clients/${id}`, { method: "DELETE" });
    setClients((prev) => prev.filter((c) => c.id !== id));
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64 text-[#94A3B8]">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white font-['Space_Grotesk']">Clients</h1>
        <button
          onClick={openAdd}
          className="bg-[#F59E0B] text-[#05070C] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F59E0B]/90 transition-colors"
        >
          + Add Client
        </button>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#10141F] border border-white/10 rounded-2xl p-6 w-full max-w-lg">
            <h2 className="text-lg font-semibold text-white mb-4">
              {editClient ? "Edit Client" : "Add Client"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Phone *</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] mb-1">Business</label>
                  <input
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="lead">Lead</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#94A3B8] mb-1">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="w-full bg-[#05070C] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#F59E0B]/50 resize-none"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#F59E0B] text-[#05070C] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F59E0B]/90 transition-colors"
                >
                  {editClient ? "Update" : "Add Client"}
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

      {/* Clients list */}
      {clients.length === 0 ? (
        <div className="bg-[#10141F] border border-white/5 rounded-xl p-8 text-center text-[#94A3B8]">
          No clients yet. Add your first client to get started.
        </div>
      ) : (
        <div className="space-y-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[#10141F] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-medium">{client.name}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        client.status === "active"
                          ? "bg-green-500/10 text-green-400"
                          : client.status === "lead"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-white/5 text-[#94A3B8]"
                      }`}
                    >
                      {client.status}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-sm">{client.business || "No business info"}</p>
                  <p className="text-[#94A3B8] text-sm">{client.email} • {client.phone}</p>
                  <div className="flex gap-4 mt-2 text-xs text-[#475569]">
                    <span>{client.campaigns.length} campaigns</span>
                    <span>{client.leads.length} leads</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEdit(client)}
                    className="text-[#94A3B8] hover:text-white text-sm px-3 py-1 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
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
