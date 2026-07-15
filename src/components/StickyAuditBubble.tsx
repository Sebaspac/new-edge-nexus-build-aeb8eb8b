import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const StickyAuditBubble = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dragStartPos = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  if (location.pathname === "/ki-audit") return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        top: 0,
        left: 0,
        right: typeof window !== "undefined" ? window.innerWidth - 70 : 1000,
        bottom: typeof window !== "undefined" ? window.innerHeight - 90 : 800,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      onDragStart={(_, info) => {
        dragStartPos.current = { x: info.point.x, y: info.point.y };
        setIsDragging(true);
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
      }}
      onDragEnd={(_, info) => {
        const dx = Math.abs(info.point.x - dragStartPos.current.x);
        const dy = Math.abs(info.point.y - dragStartPos.current.y);
        if (dx < 5 && dy < 5) {
          navigate("/ki-audit");
          window.scrollTo(0, 0);
        }
        document.body.style.userSelect = "";
        document.body.style.webkitUserSelect = "";
        setTimeout(() => setIsDragging(false), 50);
      }}
      onClick={() => {
        if (!isDragging) { navigate("/ki-audit"); window.scrollTo(0, 0); }
      }}
      className="fixed bottom-8 right-8 z-[9999] cursor-grab active:cursor-grabbing flex flex-col items-center gap-2"
      style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Label */}
      <motion.div
        className="rounded-none bg-foreground px-3 py-1.5 text-background text-xs font-mono font-bold tracking-wide whitespace-nowrap shadow-glow select-none pointer-events-none"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Kostenlose Analyse sichern
      </motion.div>

      {/* Bubble */}
      <div className="relative">
        <motion.div
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow"
          animate={{
            boxShadow: [
              "0 0 20px hsl(var(--primary-glow) / 0.4)",
              "0 0 40px hsl(var(--primary-glow) / 0.7)",
              "0 0 20px hsl(var(--primary-glow) / 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StickyAuditBubble;
