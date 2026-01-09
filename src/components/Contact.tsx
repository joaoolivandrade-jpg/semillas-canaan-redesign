import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-canaan-cream/80 font-semibold mb-2">Contacto</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              ¿Listo para Transformar tu Campo?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Contáctanos hoy mismo y recibe asesoría personalizada para elegir 
              las mejores semillas para tu proyecto.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* WhatsApp Card */}
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Respuesta inmediata
              </p>
              <a
                href="https://wa.me/595981605570"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-canaan-cream hover:underline"
              >
                +595 981 605570
              </a>
            </div>

            {/* Contact Info Card */}
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Teléfono</h4>
                    <p className="text-primary-foreground/80">+595 981 605570</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Email</h4>
                    <p className="text-primary-foreground/80">canaan.coml.import.exp@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Ubicación</h4>
                    <p className="text-primary-foreground/80">Pedro Juan Caballero, Paraguay</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Horario</h4>
                    <p className="text-primary-foreground/80">Lun - Sáb: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/595981605570" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Mensaje por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
