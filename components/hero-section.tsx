import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Shield } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              ✨ Oferta Especial - 30% OFF no primeiro mês
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plano de Saúde <span className="text-blue-600">Completo</span> para Toda Família
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Cobertura nacional, atendimento 24h, consultas sem carência e os melhores hospitais do país. Cuide da sua
              saúde com quem entende do assunto.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Sem carência para consultas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Cobertura nacional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Melhores hospitais</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Ver Planos e Preços
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Falar com Consultor
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 (2.847 avaliações)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">+50.000 clientes</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Família feliz com médico - Planos de Saúde"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold text-gray-900">100% Seguro</p>
                  <p className="text-sm text-gray-600">ANS Regulamentado</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg z-20">
              <p className="font-bold text-lg">A partir de</p>
              <p className="text-2xl font-bold">R$ 89,90/mês</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
