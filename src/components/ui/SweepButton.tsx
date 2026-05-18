import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type SweepColor = "violet" | "dark" | "white";

interface SweepProps {
  sweepColor?: SweepColor;
  hoverTextColor?: string;
  duration?: number;
  exitDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ── Sweep overlay — always rises from bottom, falls back down on exit
const SweepOverlay = ({
  hovered,
  sweepColor = "violet",
  duration = 0.52,
  exitDuration,
}: {
  hovered: boolean;
  sweepColor?: SweepColor;
  duration?: number;
  exitDuration?: number;
}) => {
  const bg =
    sweepColor === "dark"
      ? "#2D1060"
      : sweepColor === "white"
      ? "#ffffff"
      : "#5B21B6";

  return (
    <motion.span
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: bg,
        transformOrigin: "50% 100%", // always bottom — rises up, falls back down
        pointerEvents: "none",
        zIndex: 0,
      }}
      animate={{ scaleY: hovered ? 1 : 0 }}
      transition={{
        duration: hovered ? duration : (exitDuration ?? duration),
        ease: hovered ? [0.16, 1, 0.3, 1] : [0.55, 0, 0.45, 1],
      }}
    />
  );
};

// ── <SweepButton> — wraps a <button>
export interface SweepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SweepProps {
  sweepColor?: SweepColor;
  hoverTextColor?: string;
  duration?: number;
  exitDuration?: number;
}

export const SweepButton: React.FC<SweepButtonProps> = ({
  children,
  sweepColor = "violet",
  hoverTextColor = "#ffffff",
  duration = 0.52,
  exitDuration,
  style,
  className = "",
  onClick,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: 0,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SweepOverlay hovered={hovered} sweepColor={sweepColor} duration={duration} exitDuration={exitDuration} />
      <motion.span
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "inherit",
        }}
        animate={{ color: hovered ? hoverTextColor : undefined }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.span>
    </button>
  );
};

// ── <SweepLink> — wraps a react-router <Link>
export interface SweepLinkProps extends SweepProps {
  to: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const SweepLink: React.FC<SweepLinkProps> = ({
  to,
  children,
  sweepColor = "violet",
  hoverTextColor = "#ffffff",
  duration = 0.52,
  style,
  className = "",
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        borderRadius: 0,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SweepOverlay hovered={hovered} sweepColor={sweepColor} duration={duration} />
      <motion.span
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "inherit",
        }}
        animate={{ color: hovered ? hoverTextColor : undefined }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

// ── <SweepAnchor> — wraps an external <a>
export interface SweepAnchorProps extends SweepProps {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const SweepAnchor: React.FC<SweepAnchorProps> = ({
  href,
  target,
  rel,
  children,
  sweepColor = "violet",
  hoverTextColor = "#ffffff",
  duration = 0.52,
  style,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`relative overflow-hidden ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        borderRadius: 0,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SweepOverlay hovered={hovered} sweepColor={sweepColor} duration={duration} />
      <motion.span
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "inherit",
        }}
        animate={{ color: hovered ? hoverTextColor : undefined }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.span>
    </a>
  );
};
