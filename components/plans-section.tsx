import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    price: 89.9,
    originalPrice: 129.9,
    description: "Ideal para quem busca o básico com qualidade",
    features: [
      "Consultas médicas ilimitadas",
      "Exames básicos sem carência",
      "Atendimento de urgência 24h",
      "Rede credenciada nacional",
      "Telemedicina incluída",
      "Cobertura ambulatorial completa",
    ],
    popular: false,
    cta: "Contratar Essencial",
  },
  {
    name: "Completo",
    price: 149.9,
    originalPrice: 219.9,
    description: "O mais escolhido pelas famílias brasileiras",
    features: [
      "Tudo do plano Essencial",
      "Internação hospitalar",
      "Cirurgias de média complexidade",
      "Exames de alta complexidade",
      "Fisioterapia e reabilitação",
      "Cobertura obstétrica",
      "Desconto em medicamentos",
    ],
    popular: true,
    cta: "Contratar Completo",
  },
  {
    name: "Premium",
    price: 249.9,
    originalPrice: 349.9,
    description: "Cobertura máxima para sua tranquilidade",
    features: [
      "Tudo do plano Completo",
      "Quarto privativo",
      "Cirurgias de alta complexidade",
      "Transplantes",
      "Tratamentos oncológicos",
      "Home care",
      "Medicina preventiva avançada",
      "Concierge médico 24h",
    ],
    popular: false,
    cta: "Contratar Premium",
  },
]

export default function PlansSection() {
  return (
    <section id="planos" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para <span className="text-blue-600">Você e sua Família</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Todos os nossos planos incluem cobertura nacional, atendimento 24h e sem carência para consultas.
          </p>
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-lg px-4 py-2">
            🔥 Oferta por tempo limitado - 30% OFF no primeiro mês
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-2 border-blue-500 shadow-2xl scale-105" : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 mr-1" />
                    MAIS POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600 mt-2">{plan.description}</p>

                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-gray-500 line-through">R$ {plan.originalPrice.toFixed(2)}</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">30% OFF</Badge>
                  </div>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price.toFixed(2)}</span>
                    <span className="text-gray-600 ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">por pessoa • sem fidelidade</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-3">Sem taxa de adesão • Cancele quando quiser</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Precisa de um plano personalizado para sua empresa?</p>
          <Button variant="outline" size="lg" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
            Solicitar Cotação Empresarial
          </Button>
        </div>
      </div>
    </section>
  )
}
