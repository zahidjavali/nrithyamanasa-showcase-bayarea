import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PerformanceCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

export const PerformanceCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  hoverScale = 1.05 
}: PerformanceCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: hoverScale, y: -5 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      viewport={{ once: true }}
    >
      {/* Decorative border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-2xl blur-sm opacity-20" />
      <div className="absolute inset-0.5 bg-white rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Sparkle effect on hover */}
      <motion.div
        className="absolute top-2 right-2 text-amber-400 opacity-0"
        whileHover={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        ✨
      </motion.div>
    </motion.div>
  );
};

export const ThemedButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary"
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  const baseClasses = "relative px-8 py-4 font-bold text-white rounded-xl shadow-xl transition-all duration-300 overflow-hidden";
  const variantClasses = variant === "primary" 
    ? "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-700 hover:via-pink-700 hover:to-amber-700"
    : "bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:via-rose-700 hover:to-pink-700";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-white/30" />
    </motion.button>
  );
};