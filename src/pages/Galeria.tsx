import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mockGalleryItems = [
  {
    id: 1,
    title: "Janela Encantada",
    category: "windows",
    description: "Miniatura de janela com vista para jardim florido",
    price: "R$ 450,00",
    image: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=800&q=80",
  },
  {
    id: 2,
    title: "Café Vintage",
    category: "past",
    description: "Cena nostálgica de um café antigo",
    price: "R$ 520,00",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    id: 3,
    title: "Jardim Secreto",
    category: "memories",
    description: "Pequeno jardim com flores delicadas",
    price: "R$ 380,00",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
  {
    id: 4,
    title: "Varanda Aconchegante",
    category: "windows",
    description: "Varanda com plantas e mobília vintage",
    price: "R$ 490,00",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: 5,
    title: "Biblioteca Antiga",
    category: "past",
    description: "Estante com livros antigos em miniatura",
    price: "R$ 580,00",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  },
  {
    id: 6,
    title: "Cantinho da Natureza",
    category: "memories",
    description: "Cena natural com elementos orgânicos",
    price: "R$ 420,00",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
];

export default function Galeria() {
  return (
    <div className="flex flex-col py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl font-bold mb-6">
            Galeria de <span className="text-accent">Obras</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção de miniaturas artesanais. Cada peça é única e feita com dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockGalleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover-lift animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-accent font-semibold text-lg text-accent">{item.price}</span>
                  <Button size="sm" variant="accent">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
