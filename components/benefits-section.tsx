import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Stethoscope, Heart, Shield, Users, Phone, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Suporte médico disponível 24 horas por dia, 7 dias por semana, incluindo feriados.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Atendimento em todo território nacional com a maior rede credenciada do país.",
  },
  {
    icon: Stethoscope,
    title: "Sem Carência",
    description: "Consultas médicas e exames básicos disponíveis imediatamente após a contratação.",
  },
  {
    icon: Heart,
    title: "Prevenção em Foco",
    description: "Programas de prevenção e check-ups regulares para manter sua saúde em dia.",
  },
  {
    icon: Shield,
    title: "ANS Regulamentado",
    description: "Plano regulamentado pela ANS com todas as coberturas obrigatórias garantidas.",
  },
  {
    icon: Users,
    title: "Plano Familiar",
    description: "Cobertura para toda família com descontos progressivos por dependente.",
  },
  {
    icon: Phone,
    title: "Telemedicina",
    description: "Consultas online com médicos especialistas no conforto da sua casa.",
  },
  {
    icon: CreditCard,
    title: "Sem Pegadinhas",
    description: "Preços transparentes, sem taxas ocultas ou surpresas na mensalidade.",
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que Escolher a <span className="text-blue-600">Somos Saúde para Todos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos muito mais que um plano de saúde. Oferecemos tranquilidade, cuidado e a certeza de que você e sua
            família estarão sempre protegidos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
