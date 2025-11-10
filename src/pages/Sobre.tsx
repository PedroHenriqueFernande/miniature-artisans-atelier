import atelierImage from "@/assets/atelier-workspace.jpg";

export default function Sobre() {
  return (
    <div className="flex flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="font-display text-5xl font-bold mb-6">Sobre o <span className="text-accent">MiniMundos</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um ateliê dedicado à arte de criar miniaturas encantadoras que eternizam momentos especiais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <img
                src={atelierImage}
                alt="Ateliê MiniMundos"
                className="rounded-2xl shadow-lg w-full hover-lift"
              />
            </div>
            
            <div className="animate-fade-in space-y-6">
              <h2 className="font-display text-3xl font-bold">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed">
                Olá, tudo bem? Meu nome é Wilde, sou criadora desse Meu Atelie, que surgiu da paixão por transformar memórias preciosas em obras de arte em miniatura.
                Cada peça é cuidadosamente elaborada à mão, com atenção aos mínimos detalhes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que as pequenas coisas têm um grande poder de evocar emoções e contar histórias.
                Por isso, dedicamos nosso tempo e habilidade para criar miniaturas que capturam a essência
                de momentos especiais, lugares queridos e memórias que merecem ser preservadas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 hover-lift animate-fade-in">
              <h3 className="font-display text-2xl font-bold mb-4 text-accent">Nosso Processo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada miniatura passa por um processo artesanal cuidadoso, desde o conceito inicial até
                os toques finais. Utilizamos materiais de alta qualidade, garantindo que
                cada peça seja durável e autêntica.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display text-2xl font-bold mb-4 text-info">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar memórias em arte tangível, criando peças únicas que trazem alegria e
                preservam momentos especiais. Cada miniatura é feita com amor e dedicação para
                encantar e emocionar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
