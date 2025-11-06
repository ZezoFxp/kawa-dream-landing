import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Onde Estamos</h2>
          <p className="text-lg text-muted-foreground">
            Venha nos visitar e experimente o verdadeiro café japonês
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua das Flores, 123<br />
                  Bairro Jardim Japonês<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 20h<br />
                  Sábado: 9h às 22h<br />
                  Domingo: 9h às 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Contato</h3>
                <p className="text-muted-foreground">
                  (11) 98765-4321<br />
                  contato@kawacoffee.com.br
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974984445916!2d-46.65440892378379!3d-23.561414678787447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização KawaCoffee"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
