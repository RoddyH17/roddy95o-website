import { Hero } from "@/components/sections/hero";
import { Poker } from "@/components/sections/poker";
import { Progress } from "@/components/sections/progress";
import { Activity } from "@/components/sections/activity";
import { Contact } from "@/components/sections/contact";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { AmbientBg } from "@/components/ui/ambient-bg";

export default function Home() {
  return (
    <main className="relative">
      <AmbientBg />
      <Nav />
      <Hero />
      <Poker />
      <Progress />
      <Activity />
      <Contact />
      <Footer />
    </main>
  );
}
