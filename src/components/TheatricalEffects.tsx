import { motion } from "framer-motion";
import { Sparkles, Music, Star, Heart, Award, Flower } from "lucide-react";

export const ConfettiEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            scale: [1, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className={`w-3 h-3 ${
              i % 4 === 0 ? 'bg-purple-400' :
              i % 4 === 1 ? 'bg-pink-400' :
              i % 4 === 2 ? 'bg-amber-400' : 'bg-red-400'
            } rounded-full opacity-80`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export const FloatingIcons = () => {
  const icons = [
    { Icon: Music, color: "text-purple-400", size: "w-8 h-8" },
    { Icon: Star, color: "text-amber-400", size: "w-6 h-6" },
    { Icon: Heart, color: "text-pink-400", size: "w-7 h-7" },
    { Icon: Award, color: "text-yellow-400", size: "w-8 h-8" },
    { Icon: Flower, color: "text-rose-400", size: "w-6 h-6" },
    { Icon: Sparkles, color: "text-blue-400", size: "w-5 h-5" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((iconData, i) => (
        <motion.div
          key={i}
          className={`absolute ${iconData.color} opacity-20`}
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + (i * 10)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -10, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <iconData.Icon className={iconData.size} />
        </motion.div>
      ))}
    </div>
  );
};

export const TheaterCurtains = () => {
  return (
    <>
      {/* Left Curtain */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-full bg-gradient-to-r from-red-800 via-red-700 to-red-600 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #7f1d1d 0%, #991b1b 50%, #dc2626 100%)",
          boxShadow: "inset -20px 0 40px rgba(0,0,0,0.3), 20px 0 40px rgba(0,0,0,0.2)"
        }}
        initial={{ x: -128 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-full bg-gradient-to-r from-red-900 to-transparent"
              style={{ left: `${i * 12.5}%` }}
            />
          ))}
        </div>
        {/* Tassels */}
        <div className="absolute top-8 right-2 w-6 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-80" />
        <div className="absolute top-32 right-4 w-4 h-16 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-60" />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="fixed top-0 right-0 w-32 h-full bg-gradient-to-l from-red-800 via-red-700 to-red-600 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #7f1d1d 0%, #991b1b 50%, #dc2626 100%)",
          boxShadow: "inset 20px 0 40px rgba(0,0,0,0.3), -20px 0 40px rgba(0,0,0,0.2)"
        }}
        initial={{ x: 128 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Curtain folds */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-full bg-gradient-to-l from-red-900 to-transparent"
              style={{ right: `${i * 12.5}%` }}
            />
          ))}
        </div>
        {/* Tassels */}
        <div className="absolute top-8 left-2 w-6 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-80" />
        <div className="absolute top-32 left-4 w-4 h-16 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-60" />
      </motion.div>

      {/* Top Valance */}
      <motion.div
        className="fixed top-0 left-32 right-32 h-24 bg-gradient-to-b from-red-800 to-red-600 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #7f1d1d 0%, #991b1b 70%, #dc2626 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
        initial={{ y: -96 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        {/* Decorative trim */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-700" />
      </motion.div>
    </>
  );
};

export const RedCarpet = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-32 z-10"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      style={{ transformOrigin: "bottom" }}
    >
      {/* Red carpet base */}
      <div 
        className="w-full h-full relative"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #dc2626 20%, #991b1b 80%, #7f1d1d 100%)"
        }}
      >
        {/* Carpet pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-full bg-gradient-to-b from-red-800 to-red-900"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        
        {/* Golden rope barriers */}
        <div className="absolute top-4 left-8 right-8 h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 rounded-full shadow-lg" />
        <div className="absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full" />
      </div>
    </motion.div>
  );
};

export const StageSpotlights = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Main spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)"
          }}
        />
      </motion.div>

      {/* Side spotlights */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)"
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 w-64 h-64"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(244,63,94,0.1) 0%, rgba(244,63,94,0.05) 40%, transparent 70%)"
          }}
        />
      </motion.div>
    </div>
  );
};