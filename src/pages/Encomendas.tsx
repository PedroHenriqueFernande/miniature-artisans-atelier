import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle2, Palette } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Encomendas() {
  return (
    <div className="flex flex-col py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl font-bold mb-6">
            Encomendas <span className="text-accent"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme suas lembranças em miniaturas exclusivas! Conte-nos sobre sua ideia e criaremos uma peça única para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift animate-fade-in border-border">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Design Personalizado</h3>
              <p className="text-sm text-muted-foreground">
                Criamos cada miniatura baseada em suas especificações, memórias e preferências únicas.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in border-border" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-info/20">
                <Clock className="h-8 w-8 text-info" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Prazo de Entrega</h3>
              <p className="text-sm text-muted-foreground">
                Tempo médio de produção: 4 a 6 semanas, dependendo da complexidade do projeto.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in border-border" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Qualidade Garantida</h3>
              <p className="text-sm text-muted-foreground">
                Materiais premium e acabamento impecável em cada detalhe da sua miniatura.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-6">Como Funciona</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-accent font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-accent font-semibold mb-2">Conte Sua Ideia</h3>
                  <p className="text-sm text-muted-foreground">
                    Clique no botão ao lado e mande mensagem com detalhes sobre a miniatura que você deseja. Quanto mais informações, melhor!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info text-info-foreground flex items-center justify-center font-accent font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-accent font-semibold mb-2">Orçamento e Projeto</h3>
                  <p className="text-sm text-muted-foreground">
                    Te responderemos para discutir os detalhes, apresentar um esboço inicial e fornecer um orçamento personalizado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-accent font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-accent font-semibold mb-2">Criação e Entrega</h3>
                  <p className="text-sm text-muted-foreground">
                    Após a aprovação, iniciamos a criação artesanal. Você receberá atualizações durante o processo e sua miniatura será entregue com todo cuidado.
                  </p>
                </div>
              </div>
            </div>


          </div>

          <Card className="animate-fade-in border-border">
            <CardContent className="pt-6 text-center">
              <h2 className="font-display text-2xl font-bold mb-6">Solicite Sua Encomenda</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Para fazer sua encomenda é simples, clique no botão abaixo e fale conosco pelo WhatsApp!
              </p>
              <Button size="lg" variant="hero" asChild className="w-full">
                <a href="https://wa.me/558191933388" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <WhatsAppIcon size={24} />
                  Fazer Encomenda
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
