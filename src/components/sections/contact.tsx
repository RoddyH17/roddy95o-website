"use client";
import { motion } from "motion/react";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { contact } from "@/data/content";
import { SectionReveal } from "@/components/ui/section-reveal";

const iconMap: Record<string, React.ReactNode> = {
  Email: <IconMail className="h-5 w-5" />,
  LinkedIn: <IconBrandLinkedin className="h-5 w-5" />,
  GitHub: <IconBrandGithub className="h-5 w-5" />,
};

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-neutral-400">{contact.subtitle}</p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-4">
            {contact.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group flex w-full max-w-sm items-center gap-4 rounded-xl border border-white/[0.05] bg-zinc-950 px-6 py-4 transition hover:border-white/[0.15] hover:bg-zinc-900"
              >
                <span className="text-neutral-500 transition group-hover:text-neutral-200">
                  {iconMap[link.label]}
                </span>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-neutral-300">{link.label}</div>
                  <div className="text-xs text-neutral-500">{link.value}</div>
                </div>
                <span className="text-neutral-600 transition group-hover:text-neutral-300">&rarr;</span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
