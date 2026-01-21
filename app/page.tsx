import { HeroSection, HeroSectionFull, ServicesSection, AboutSection, ClientsSection, ContactSection, Footer } from '@/app/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSectionFull
        title={
          <>
            Accélérez votre transformation numérique<br />
            <span className="text-[#eb7e2a]">en toute sécurité</span>
          </>
        }
        subtitle="Cybersécurité, cloud et intelligence artificielle pour des organisations performantes, sécurisées et résilientes."
        callToAction={{
          text: "Découvrir nos services",
          href: "#services",
        }}
        backgroundVideo="/hero-video.mp4"
      />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
