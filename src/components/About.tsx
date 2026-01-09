import { motion } from "framer-motion";
import { Award, Truck, ShieldCheck, Leaf } from "lucide-react";
import aboutImage from "@/assets/about-field.jpg";

const features = [
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Todas nuestras semillas cuentan con certificación de origen brasileño y controles de calidad.",
  },
  {
    icon: Truck,
    title: "Entrega en Todo Paraguay",
    description: "Realizamos entregas en todo el territorio nacional con logística eficiente.",
  },
  {
    icon: ShieldCheck,
    title: "Asesoría Técnica",
    description: "Ofrecemos orientación profesional para la elección y siembra de las semillas.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Promovemos prácticas agrícolas sustentables para el desarrollo del campo paraguayo.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Campos de pasto en Paraguay"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="text-4xl font-heading font-bold text-accent mb-2">10+</div>
              <div className="text-foreground font-medium">Años cultivando confianza</div>
              <div className="text-sm text-muted-foreground">
                Sirviendo al sector ganadero paraguayo
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold mb-2">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Sembramos Esperanza, Cosechamos Prosperidad
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Semillas Canaan</strong> es una empresa paraguaya dedicada 
              a la importación y comercialización de semillas de pasto de alta calidad provenientes de Brasil. 
              Nuestro compromiso es brindar a los productores ganaderos las mejores opciones para el desarrollo 
              de pasturas productivas y sustentables.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
