"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PHONE = "15157216852";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Héctor! I'd like to get a free estimate for a concrete project.")}`;

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show button after 2s, bubble after 5s
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2000);
    const t2 = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [dismissed]);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl rounded-br-sm shadow-2xl shadow-black/20 px-4 py-3 max-w-[220px] border border-slate-100"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute -top-2 -right-2 w-5 h-5 bg-slate-400 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            <p className="text-slate-800 text-sm font-semibold leading-snug">
              👋 Hi! Need a <span className="text-green-600 font-black">free estimate</span>? Chat with Héctor directly.
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Online now</span>
            </div>
            {/* Bubble tail */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowBubble(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bf5b] rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-colors"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.74 3.054 9.374L1.054 31.2l5.994-1.92A15.926 15.926 0 0 0 16.004 32C24.828 32 32 24.822 32 16S24.828 0 16.004 0zm9.304 22.61c-.386 1.09-1.924 1.994-3.15 2.258-.838.178-1.932.32-5.614-1.208-4.714-1.952-7.748-6.74-7.984-7.054-.228-.314-1.916-2.55-1.916-4.862s1.182-3.44 1.65-3.918c.386-.394.858-.494 1.144-.494.286 0 .572.002.822.014.264.014.618-.1.968.738.362.858 1.228 2.982 1.334 3.2.108.218.18.474.036.762-.136.296-.204.48-.406.738-.202.258-.426.576-.608.774-.202.218-.412.454-.178.89.234.436 1.042 1.718 2.236 2.782 1.536 1.368 2.832 1.792 3.27 1.992.436.2.69.168.944-.1.258-.268 1.104-1.29 1.4-1.732.292-.44.584-.368.984-.22.4.146 2.538 1.196 2.974 1.414.436.218.726.326.832.508.108.18.108 1.036-.278 2.128z"/>
        </svg>
      </motion.a>
    </div>
  );
}
