"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const notifications = [
  { name: "Carlos M.", city: "Des Moines", service: "Stamped Concrete Patio", time: "2 min ago" },
  { name: "Jennifer R.", city: "Ames", service: "Driveway Replacement", time: "5 min ago" },
  { name: "Mike T.", city: "Cedar Rapids", service: "Commercial Concrete", time: "8 min ago" },
  { name: "Sandra L.", city: "Iowa City", service: "Backyard Patio", time: "12 min ago" },
  { name: "David K.", city: "Ankeny", service: "Stamped Driveway", time: "15 min ago" },
  { name: "Rosa V.", city: "Sioux City", service: "Patio & Walkway", time: "3 min ago" },
  { name: "Tom B.", city: "Waterloo", service: "Driveway Pour", time: "7 min ago" },
  { name: "Ana G.", city: "Council Bluffs", service: "Decorative Concrete", time: "20 min ago" },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showNext(0);
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, []);

  function showNext(index: number) {
    setCurrent(index);
    setVisible(true);

    // Hide after 5s, then show next after another 5s pause (10s total cycle)
    const hideTimer = setTimeout(() => {
      setVisible(false);
      const nextTimer = setTimeout(() => {
        const nextIndex = (index + 1) % notifications.length;
        showNext(nextIndex);
      }, 5000);
      return () => clearTimeout(nextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }

  const notif = current !== null ? notifications[current] : null;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && notif && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3.5 shadow-2xl shadow-black/40 flex items-start gap-3 max-w-[280px]"
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-sm flex-shrink-0">
              {notif.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">New Request</span>
              </div>
              <p className="text-white text-xs font-semibold leading-snug">
                <span className="text-white">{notif.name}</span>
                <span className="text-white/50"> from </span>
                <span className="text-white">{notif.city}</span>
              </p>
              <p className="text-white/40 text-[11px] mt-0.5 truncate">{notif.service}</p>
              <div className="flex items-center gap-1 mt-1.5">
                <Clock className="w-2.5 h-2.5 text-white/20" />
                <span className="text-[10px] text-white/25">{notif.time}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
