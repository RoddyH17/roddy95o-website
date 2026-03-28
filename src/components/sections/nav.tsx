"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconCards,
  IconChartBar,
  IconActivity,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-400" />,
    href: "#home",
  },
  {
    title: "Poker Lab",
    icon: <IconCards className="h-full w-full text-neutral-400" />,
    href: "#poker",
  },
  {
    title: "This Week",
    icon: <IconChartBar className="h-full w-full text-neutral-400" />,
    href: "#progress",
  },
  {
    title: "Activity",
    icon: <IconActivity className="h-full w-full text-neutral-400" />,
    href: "#activity",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-400" />,
    href: "#contact",
  },
];

export function Nav() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <FloatingDock items={navItems} />
    </div>
  );
}
