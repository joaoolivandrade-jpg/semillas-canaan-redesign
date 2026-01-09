import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import seedsImage from "@/assets/seeds-product.jpg";

const products = [
  {
    name: "Brachiaria Brizantha",
    variety: "MG5",
    description: "Excelente para pastoreo intensivo. Alta producción de forraje y buena tolerancia a sequías.",
    features: ["Alta productividad", "Resistente a sequía", "Ideal para ganado bovino"],
    pureza: "60%",
    germinacion: "80%",
  },
  {
    name: "Brachiaria Brizantha",
    variety: "Marandu",
    description: "Variedad muy versátil con excelente palatabilidad y adaptación a diferentes suelos.",
    features: ["Gran palatabilidad", "Adaptable a suelos", "Buena cobertura"],
    pureza: "60%",
    germinacion: "80%",
  },
  {
    name: "Brachiaria Decumbens",
    variety: "Basilisk",
    description: "Ideal para suelos de baja fertilidad. Excelente cobertura y control de erosión.",
    features: ["Suelos pobres", "Control de erosión", "Bajo mantenimiento"],
    pureza: "60%",
    germinacion: "75%",
  },
  {
    name: "Panicum Maximum",
    variety: "Mombasa",
    description: "Alta producción de materia seca y excelente para sistemas de pastoreo rotativo.",
    features: ["Alto rendimiento", "Pastoreo rotativo", "Rápido rebrote"],
    pureza: "40%",
    germinacion: "70%",
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold mb-2">Nuestros Productos</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Semillas de Pasto Brasileñas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Importamos directamente de Brasil las mejores variedades de semillas para 
            garantizar la calidad y productividad de su pastura.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={seedsImage} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-heading">{product.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    Variedad: {product.variety}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span>Pureza: {product.pureza}</span>
                    <span>Germ: {product.germinacion}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="default" size="lg" asChild>
            <a href="https://wa.me/595981605570" target="_blank" rel="noopener noreferrer">
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
