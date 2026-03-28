"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  IconHome,
  IconCards,
  IconFlask,
  IconChartBar,
  IconBrain,
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
    title: "Research",
    icon: <IconCards className="h-full w-full text-neutral-400" />,
    href: "#poker",
  },
  {
    title: "Lab",
    icon: <IconFlask className="h-full w-full text-neutral-400" />,
    href: "#lab",
  },
  {
    title: "This Week",
    icon: <IconChartBar className="h-full w-full text-neutral-400" />,
    href: "#progress",
  },
  {
    title: "Digest",
    icon: <IconBrain className="h-full w-full text-neutral-400" />,
    href: "#digest",
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
  const activeSection = useActiveSection();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <FloatingDock items={navItems} activeSection={activeSection} />
    </div>
  );
}
