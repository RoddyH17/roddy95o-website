"use client";
import { cn } from "@/lib/utils";
import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { motion } from "motion/react";

const MouseEnterContext = createContext<{
  rotateX: number;
  rotateY: number;
}>({ rotateX: 0, rotateY: 0 });

export function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setRotate({ rotateX: -y, rotateY: x });
  };

  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0 });
  };

  return (
    <MouseEnterContext.Provider value={rotate}>
      <div
        className={cn("flex items-center justify-center", className)}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: rotate.rotateX,
            rotateY: rotate.rotateY,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-auto w-auto rounded-xl border border-white/[0.08] bg-zinc-950 p-6 [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
  as?: React.ElementType;
}) {
  return (
    <Component
      className={cn("", className)}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Component>
  );
}

export function useMouseEnter() {
  return useContext(MouseEnterContext);
}
