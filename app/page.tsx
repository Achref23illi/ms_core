import { HeroSection, HeroSectionFull, ServicesSection, AboutSection, ContactSection, Footer } from '@/app/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSectionFull
        title={
          <>
            Votre Partenaire <br />
            <span className="text-[#eb7e2a]">Microsoft Certifié</span>
          </>
        }
        subtitle="Nous combinons l'expertise Microsoft, l'IA et la cybersécurité de pointe pour accroître votre efficacité et renforcer votre résilience."
        callToAction={{
          text: "Découvrir nos services",
          href: "#services",
        }}
        backgroundVideo="/hero-video.mp4"
      />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
