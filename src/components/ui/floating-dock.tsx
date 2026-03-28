"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export function FloatingDock({
  items,
  className,
  activeSection,
}: {
  items: DockItem[];
  className?: string;
  activeSection?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-14 items-end gap-2.5 rounded-2xl border border-white/[0.08] bg-black/80 px-3.5 pb-2 backdrop-blur-md",
        className
      )}
    >
      {items.map((item) => {
        const sectionId = item.href.replace("#", "");
        return (
          <DockIcon
            mouseX={mouseX}
            key={item.title}
            isActive={activeSection === sectionId}
            {...item}
          />
        );
      })}
    </motion.div>
  );
}

function DockIcon({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: DockItem & { mouseX: MotionValue; isActive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [36, 56, 36]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [36, 56, 36]);
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          isActive ? "bg-zinc-800" : "bg-zinc-900"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-white/[0.1] bg-zinc-900 px-2 py-0.5 text-xs text-neutral-300"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className={cn(
          "flex h-5 w-5 items-center justify-center transition-colors",
          isActive ? "[&>*]:!text-neutral-200" : ""
        )}>
          {icon}
        </div>
        {/* Active section indicator dot */}
        {isActive && (
          <motion.div
            layoutId="activeSectionDot"
            className="absolute -bottom-1 h-1 w-1 rounded-full bg-green-400"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>
    </a>
  );
}
