import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import galleryPreview from "@/assets/gallery-preview.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/fundo 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-display text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl mb-6">
              Onde Cada Detalhe é Feito com{" "}
              <span className="text-info">Carinho e Dedicação</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bem-vindo ao MiniMundos, onde transformamos memórias especiais em miniaturas encantadoras.
              Cada peça é única, criada artesanalmente com amor e atenção aos detalhes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero" asChild>
                <Link to="/galeria">
                  Descubra os MiniMundos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/comissoes">Peça Sua Miniatura</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center animate-fade-in hover-lift rounded-2xl p-8 bg-background">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Feito com Amor</h3>
              <p className="text-muted-foreground">
                Cada miniatura é criada com dedicação e carinho, valorizando cada pequeno detalhe.
              </p>
            </div>

            <div className="text-center animate-fade-in hover-lift rounded-2xl p-8 bg-background" style={{ animationDelay: "0.1s" }}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-info/20">
                <Sparkles className="h-8 w-8 text-info" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Peças Únicas</h3>
              <p className="text-muted-foreground">
                Obras artesanais exclusivas que capturam momentos especiais e memórias preciosas.
              </p>
            </div>

            <div className="text-center animate-fade-in hover-lift rounded-2xl p-8 bg-background" style={{ animationDelay: "0.2s" }}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Personalização</h3>
              <p className="text-muted-foreground">
                Criamos miniaturas personalizadas baseadas nas suas memórias e histórias favoritas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl font-bold mb-6">
                Explore Nossos <span className="text-accent">MiniMundos</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                De janelas encantadoras a cenas nostálgicas do passado, cada miniatura conta uma história única.
                Navegue por nossa galeria e descubra o mundo em miniatura.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <p className="text-muted-foreground">Janelas e Jardins Encantadores</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-info mt-2" />
                  <p className="text-muted-foreground">Cenas Nostálgicas do Passado</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                  <p className="text-muted-foreground">Memórias e Natureza em Miniatura</p>
                </div>
              </div>
              <Button size="lg" variant="default" asChild>
                <Link to="/galeria">Ver Galeria Completa</Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src={galleryPreview}
                alt="Galeria de Miniaturas MiniMundos"
                className="rounded-2xl shadow-lg hover-lift w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-info/10 to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6 animate-fade-in">
            Pronto para Ter Sua Própria Miniatura?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Entre em contato e vamos criar juntos uma peça especial que vai eternizar suas memórias.
          </p>
          <Button size="lg" variant="hero" asChild className="animate-scale-in">
            <Link to="/comissoes">
              Solicitar Comissão Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
