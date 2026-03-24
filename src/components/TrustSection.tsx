"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { ShieldCheck, Award, ThumbsUp, MapPin, Star, Heart } from "lucide-react";

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const trustItems = [
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: Award, text: "Certified Craftsmanship" },
  { icon: ThumbsUp, text: "Top Rated in Iowa" },
  { icon: MapPin, text: "Local Family Owned" },
  { icon: Star, text: "5-Star Reviews" },
  { icon: Heart, text: "Customer Obsessed" },
];

function ParallaxText({ children, baseVelocity = 10 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div className="flex items-center gap-12" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-12 bg-[#020617] relative border-y border-white/5 overflow-hidden">
      {/* Concrete Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>

      <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6">
        <ParallaxText baseVelocity={-2}>
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]">
                <item.icon className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-white font-outfit font-black text-xl md:text-2xl uppercase tracking-tighter opacity-80">
                {item.text}
              </span>
            </div>
          ))}
        </ParallaxText>
        
        {/* Counter-rotating secondary marquee for more visual impact */}
        <ParallaxText baseVelocity={2}>
          {trustItems.map((item, i) => (
            <div key={`reverse-${i}`} className="flex items-center gap-3 px-6">
              <span className="text-transparent text-stroke-1 text-stroke-white/20 font-outfit font-black text-2xl md:text-4xl uppercase tracking-tighter hover:text-white/40 transition-colors">
                {item.text}
              </span>
              <div className="w-2 h-2 rounded-full bg-amber-500/50 mx-4"></div>
            </div>
          ))}
        </ParallaxText>
      </div>
      
      {/* Gradient masks for edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
