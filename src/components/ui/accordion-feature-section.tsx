import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface AccordionFeatureSectionProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "KI-Strategie",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    description:
      "Entwickeln Sie eine maßgeschneiderte KI-Strategie, die perfekt auf Ihre Unternehmensziele abgestimmt ist. Von der ersten Analyse bis zur Implementierung begleiten wir Sie auf Ihrem Weg zur digitalen Transformation.",
  },
  {
    id: 2,
    title: "KI-Automatisierung",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    description:
      "Automatisieren Sie wiederkehrende Prozesse mit intelligenten KI-Lösungen. Steigern Sie Ihre Effizienz und reduzieren Sie Kosten durch den Einsatz modernster Automatisierungstechnologien.",
  },
  {
    id: 3,
    title: "KI-Integration",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    description:
      "Nahtlose Integration von KI-Systemen in Ihre bestehende IT-Infrastruktur. Wir sorgen für eine reibungslose Implementierung ohne Unterbrechung Ihrer Geschäftsprozesse.",
  },
  {
    id: 4,
    title: "KI-Schulung",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    description:
      "Befähigen Sie Ihr Team mit umfassenden Schulungen zu KI-Technologien und Best Practices. Von Grundlagen bis zu fortgeschrittenen Themen - wir machen Ihr Team fit für die digitale Zukunft.",
  },
  {
    id: 5,
    title: "KI-Support",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    description:
      "Kontinuierlicher Support und Optimierung Ihrer KI-Lösungen. Wir stehen Ihnen mit Expertise und technischem Know-how zur Seite, damit Ihre KI-Systeme stets optimal performen.",
  },
];

const AccordionFeatureSection = ({ features = defaultFeatures }: AccordionFeatureSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-h1 mb-4">Unsere KI-Services</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an KI-Dienstleistungen für Ihr Unternehmen
          </p>
        </div>
        <div className="flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AccordionFeatureSection };
