import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Heart } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400 mb-6 text-lg px-4 py-2">
            ⏰ Oferta por tempo limitado!
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Não Deixe sua Saúde para Depois</h2>

          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Proteja você e sua família hoje mesmo. Comece com <strong>30% de desconto</strong> no primeiro mês e tenha
            acesso imediato a consultas médicas, exames e atendimento 24h.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">Ativação Imediata</p>
                <p className="text-sm opacity-80">Use hoje mesmo</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">100% Seguro</p>
                <p className="text-sm opacity-80">ANS Regulamentado</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Heart className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold">Sem Fidelidade</p>
                <p className="text-sm opacity-80">Cancele quando quiser</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 text-xl px-10 py-4 font-bold"
            >
              Contratar Agora - 30% OFF
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700 text-xl px-10 py-4 font-bold bg-transparent"
            >
              Falar com Consultor
            </Button>
          </div>

          <div className="text-center">
            <p className="text-lg mb-2">
              <strong>A partir de R$ 89,90/mês</strong> • Sem taxa de adesão
            </p>
            <p className="opacity-80">Mais de 50.000 famílias já confiam em nossos planos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
