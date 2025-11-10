import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <div className="flex flex-col py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl font-bold mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre nossas miniaturas? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift animate-fade-in border-border" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold mb-2">Entre em Contato!</h3>
                  <a
                    href="https://wa.me/558191933388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent smooth-transition"
                  >
                    +55 81 9193-3388
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-fade-in border-border" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-accent font-semibold mb-2">Localização</h3>
                  <p className="text-sm text-muted-foreground">
                    São Paulo, SP<br />Brasil
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Nos Encontre nas Redes Sociais</h2>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/criando.minimundo?utm_source=ig_web_button_share_sheet&igsh=dGpwZjY2dWl0MWkw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 smooth-transition">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-accent font-semibold">Instagram</h3>
                    <p className="text-sm text-muted-foreground">@criando.minimundo</p>
                  </div>
                </a>
              </div>
            </div>

            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-info/5">
              <CardContent className="pt-6">
                <h3 className="font-display text-xl font-bold mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                    <span className="font-accent font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-accent font-medium">9h às 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-accent font-medium">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-secondary/20 border border-secondary/30 rounded-xl">
              <h3 className="font-accent font-semibold mb-3">Respostas Rápidas</h3>
              <p className="text-sm text.muted-foreground">
                Normalmente respondemos em até 24 horas úteis. Para urgências, entre em contato via WhatsApp para uma resposta mais rápida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
