import Hero from '@/components/hero';
import { LandingFooter } from '@/components/landing-footer';
import { LandingHeader } from '@/components/landing-header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHeader />
      <div className="flex-1">
        <Hero />
      </div>
      <LandingFooter />
    </main>
  );
}
