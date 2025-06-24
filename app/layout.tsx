import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}




export const metadata: Metadata = {
  title: "Planos de Saúde | Somos Saúde para Todos - Cobertura Completa e Preços Acessíveis",
  description:
    "Encontre o plano de saúde ideal para você e sua família. Cobertura nacional, atendimento 24h, consultas sem carência. Compare nossos planos e contrate online.",
  keywords: "planos de saúde, seguro saúde, cobertura médica, consultas médicas, exames, internação, ANS, telemedicina",
  authors: [{ name: "Somos Saúde para Todos" }],
  creator: "Somos Saúde para Todos",
  publisher: "Somos Saúde para Todos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://somossaude.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Planos de Saúde | Somos Saúde para Todos",
    description: "Cobertura completa e preços acessíveis. Contrate seu plano de saúde online.",
    url: "https://somossaude.vercel.app",
    siteName: "Somos Saúde para Todos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somos Saúde para Todos - Planos de Saúde",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de Saúde | Somos Saúde para Todos",
    description: "Cobertura completa e preços acessíveis. Contrate seu plano de saúde online.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Somos Saúde para Todos",
              url: "https://somossaude.vercel.app",
              logo: "https://somossaude.vercel.app/logo.png",
              description: "Planos de saúde com cobertura nacional, atendimento 24h e preços acessíveis",
              telephone: "+55-11-9999-9999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Paulista, 1000",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01310-100",
                addressCountry: "BR",
              },
              sameAs: [
                "https://facebook.com/somossaude",
                "https://instagram.com/somossaude",
                "https://twitter.com/somossaude",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
