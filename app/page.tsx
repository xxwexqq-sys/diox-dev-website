import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Advantages } from '@/components/Advantages';
import { Projects } from '@/components/Projects';
import { Calculator } from '@/components/Calculator';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Technologies } from '@/components/Technologies';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Advantages />
      <Projects />
      <Technologies />
      <Calculator />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
