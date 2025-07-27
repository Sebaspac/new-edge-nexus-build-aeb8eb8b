import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
  accentColor: string;
  bgColor?: string;
}

export const ServicesSection = ({ 
  title, 
  subtitle, 
  services, 
  accentColor,
  bgColor = "bg-gray-50"
}: ServicesSectionProps) => {
  return (
    <section className={`py-16 sm:py-32 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 animate-fade-in">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in px-4">
            {subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <service.icon 
                      className="w-8 h-8" 
                      style={{ color: accentColor }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};