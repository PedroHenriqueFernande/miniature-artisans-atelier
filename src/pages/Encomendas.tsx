import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, CheckCircle2, Palette } from "lucide-react";
import { toast } from "sonner";

export default function Encomendas() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pedido enviado com sucesso!", {
      description: "Entraremos em contato em breve para discutir sua encomenda.",
    });
    setFormData({ name: "", email: "", phone: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                    Preencha o formulário ao lado com detalhes sobre a miniatura que você deseja. 
                    Quanto mais informações, melhor!
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
                    Entraremos em contato para discutir os detalhes, apresentar um esboço inicial e fornecer um orçamento personalizado.
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
            <CardContent className="pt-6">
              <h2 className="font-display text-2xl font-bold mb-6">Solicite Sua Encomenda</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone (WhatsApp)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descreva Sua Ideia</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos sobre a miniatura que você gostaria de criar. Inclua detalhes como tema, cores, tamanho aproximado, elementos importantes, e qualquer referência visual que possa ajudar."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" variant="hero" className="w-full">
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Após envio do seu formulário, nossa resposta será de imediato, fique atento(a) ao whatsapp.
                </p>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda que entraremos em contato para discutir sua encomenda.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
