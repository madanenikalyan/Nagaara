"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { getStoredUTM } from "@/hooks/useUTMTracking";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const whatsAppUrl = useMemo(() => {
    const stored = getStoredUTM();
    let message = "Hi Nagaara, I'd like to book a free strategy call.";
    if (stored.utm_campaign) {
      message += ` (Source: ${stored.utm_source || "website"}, Campaign: ${stored.utm_campaign})`;
    }
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible && !tooltipDismissed) {
      const timer = setTimeout(() => setTooltipDismissed(true), 6000);
      return () => clearTimeout(timer);
    }
  }, [visible, tooltipDismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {!tooltipDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white text-gray-900 rounded-2xl px-5 py-3 shadow-xl max-w-[220px]"
          >
            <button
              onClick={() => setTooltipDismissed(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium pr-4">
              Need help growing your business?
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Chat with us on WhatsApp
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </motion.a>

      <span className="text-[10px] text-gray-600 text-right">
        {PHONE_DISPLAY}
      </span>
    </div>
  );
}
