import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import PlansSection from "@/components/plans-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Planos de Saúde | Somos Saúde para Todos - Cobertura Completa e Preços Acessíveis",
  description:
    "Encontre o plano de saúde ideal para você e sua família. Cobertura nacional, atendimento 24h, consultas sem carência. Compare nossos planos e contrate online.",
  keywords: "planos de saúde, seguro saúde, cobertura médica, consultas médicas, exames, internação",
  openGraph: {
    title: "Planos de Saúde | Somos Saúde para Todos",
    description: "Cobertura completa e preços acessíveis. Contrate seu plano de saúde online.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de Saúde | Somos Saúde para Todos",
    description: "Cobertura completa e preços acessíveis. Contrate seu plano de saúde online.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
