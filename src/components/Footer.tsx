import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">KawaCoffee</h3>
            <p className="text-accent-foreground/80">
              Trazendo a autêntica experiência do café japonês para o Brasil
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-accent-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-accent-foreground transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-accent-foreground transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:contato@kawacoffee.com.br"
                className="hover:text-accent-foreground transition-colors"
                aria-label="E-mail"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-accent-foreground/80">
          <p>&copy; 2024 KawaCoffee. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
