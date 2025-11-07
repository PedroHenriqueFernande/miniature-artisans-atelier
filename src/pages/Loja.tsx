import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    title: "Janela Encantada Premium",
    category: "Janelas",
    description: "Miniatura premium de janela com detalhes em madeira nobre e jardim florido. Inclui iluminação LED.",
    price: 650.0,
    image: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=800&q=80",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    title: "Café Parisiense",
    category: "Cenas",
    description: "Réplica detalhada de um café francês vintage com mesas, cadeiras e elementos decorativos.",
    price: 720.0,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    title: "Jardim Secreto",
    category: "Natureza",
    description: "Jardim em miniatura com flores artesanais, banco de madeira e cerca decorativa.",
    price: 480.0,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    title: "Biblioteca Clássica",
    category: "Cenas",
    description: "Estante com livros em miniatura, escada, e poltrona de leitura. Perfeita para amantes de livros.",
    price: 820.0,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    inStock: false,
    featured: false,
  },
];

export default function Loja() {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} adicionado ao carrinho!`, {
      description: "Continue comprando ou finalize seu pedido.",
    });
  };

  return (
    <div className="flex flex-col py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl font-bold mb-6">
            Nossa <span className="text-accent">Loja</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miniaturas exclusivas disponíveis para compra. Todas feitas artesanalmente com materiais de alta qualidade.
          </p>
        </div>

        <div className="bg-info/10 border border-info/20 rounded-xl p-6 mb-12 animate-fade-in">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-info" />
            <div>
              <h3 className="font-accent font-semibold mb-1">Segurança Garantida</h3>
              <p className="text-sm text-muted-foreground">
                Pagamento 100% seguro. Entrega cuidadosa com embalagem especial para proteger sua miniatura.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-lift animate-fade-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover-scale"
                />
                {product.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Destaque
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="secondary" className="text-base">
                      Esgotado
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">
                  {product.category}
                </Badge>
                <h3 className="font-display text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-accent font-bold text-2xl text-primary">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <Button
                    variant={product.inStock ? "hero" : "outline"}
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product.title)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Comprar" : "Indisponível"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-accent/10 via-info/10 to-secondary/10 rounded-2xl p-8">
            <h2 className="font-display text-3xl font-bold mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-muted-foreground mb-6">
              Criamos miniaturas personalizadas baseadas nas suas ideias e memórias especiais.
            </p>
            <Button size="lg" variant="hero">
              Solicitar Comissão Personalizada
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
