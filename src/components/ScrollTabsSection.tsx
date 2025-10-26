import { useScrollTabDetection } from "@/hooks/useScrollTabDetection";
import { CircleButton } from "./ui/CircleButton";

interface ScrollTabsSectionProps {
  onContactClick?: () => void;
}

export const ScrollTabsSection = ({ onContactClick }: ScrollTabsSectionProps) => {
  const { activeTab } = useScrollTabDetection();

  const tabs = [
    {
      title: "Strategische Positionierung",
      description: "Wir analysieren Ihre Zielgruppe und definieren klare Markenbotschaften, die Ihre Marke von der Konkurrenz abheben.",
      media: "/assets/ki-strategy.png",
      type: "image" as const
    },
    {
      title: "Content Produktion",
      description: "Von Social Media über Website-Content bis hin zu Kampagnen – wir produzieren Content, der Ihre Zielgruppe begeistert.",
      media: "/assets/media-content-video.mp4",
      type: "video" as const
    },
    {
      title: "Automatisierung",
      description: "Workflows optimieren, Integrationen aufbauen, Prozesse automatisieren – für maximale Effizienz in Ihrem Business.",
      media: "/assets/lab-ki-automation-video.mp4",
      type: "video" as const
    },
    {
      title: "KI-Integration",
      description: "Chatbots, AI-Agenten und Predictive Analytics – wir integrieren modernste KI-Technologien in Ihr Business.",
      media: "/assets/cora-agent-video.mp4",
      type: "video" as const
    },
    {
      title: "Analytics & Tracking",
      description: "Dashboard, KPI-Tracking und ROI-Messung in Echtzeit – alle wichtigen Metriken auf einen Blick.",
      media: "/assets/804d1765-b7c9-45f5-93a3-dddb443996f4.png",
      type: "image" as const
    }
  ];

  return (
    <section className="relative bg-[var(--gray-800)] rounded-[var(--border-radius--xlarge)] z-[99]">
      <div className="py-14 md:py-28 relative">
        <div className="tabs_height">
          <div className="sticky top-[5vh] h-[90vh]">
            <div className="max-w-[120rem] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-6 px-[3.3%] h-[90vh] font-poppins">
                
                {/* LEFT PANEL - Tabs Content */}
                <div className="bg-[var(--gray-700)] rounded-[var(--border-radius--medium)] p-6 flex flex-col justify-end">
                  <div className="relative h-full">
                    {tabs.map((tab, index) => (
                      <div
                        key={index}
                        className={`tabs_let-content ${activeTab === index ? 'is-1' : ''}`}
                      >
                        <h2 className="heading-style-h4 text-color-gray100">
                          {tab.title}
                        </h2>
                        <div className="w-full h-px bg-[var(--gray-500)] my-4" />
                        <p className="text-size-small text-color-gray400">
                          {tab.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom CTA Button */}
                  <div className="mt-6">
                    <CircleButton 
                      text="Projekt starten" 
                      onClick={onContactClick}
                    />
                  </div>
                </div>
                
                {/* RIGHT PANEL - Media */}
                <div className="relative rounded-[var(--border-radius--medium)] overflow-hidden">
                  {tabs.map((tab, index) => (
                    tab.type === "video" ? (
                      <video
                        key={index}
                        src={tab.media}
                        className={`tabs_video ${activeTab === index ? 'is-1' : ''}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        key={index}
                        src={tab.media}
                        alt={tab.title}
                        className={`tabs_video ${activeTab === index ? 'is-1' : ''}`}
                      />
                    )
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
