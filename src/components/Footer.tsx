import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">MiniMundos</h3>
            <p className="text-sm text-muted-foreground">
              Transformando memórias em miniaturas encantadoras, com carinho e dedicação em cada detalhe.
            </p>
          </div>
          
          <div>
            <h4 className="font-accent font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-accent smooth-transition">
                  Sobre o Ateliê
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-muted-foreground hover:text-accent smooth-transition">
                  Galeria de Obras
                </Link>
              </li>
              <li>
                <Link to="/encomendas" className="text-muted-foreground hover:text-accent smooth-transition">
                  Encomendas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-accent font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <a href="https://wa.me/558191933388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent smooth-transition">
                  <WhatsAppIcon size={20} />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/criando.minimundo?utm_source=ig_web_button_share_sheet&igsh=dGpwZjY2dWl0MWkw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent smooth-transition flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-pink-500" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MiniMundos Ateliê. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
