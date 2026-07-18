"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#05070C] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white font-['Space_Grotesk']">
            NAGAARA
          </h1>
          <p className="text-[#94A3B8] mt-2">CRM Dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#10141F] border border-white/5 rounded-2xl p-8 space-y-6"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#05070C] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
              placeholder="admin@nagaara.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#94A3B8] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#05070C] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#F59E0B]/50 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F59E0B] text-[#05070C] font-semibold rounded-lg px-4 py-3 hover:bg-[#F59E0B]/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
