import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  theme: 'studio' | 'media' | 'lab';
}

export const ContactFormModal = ({
  isOpen,
  onClose,
  accentColor,
  gradientFrom,
  gradientTo,
  theme
}: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      firma: formData.get('firma')?.toString() || '',
      telefon: formData.get('telefon')?.toString() || '',
      nachricht: formData.get('nachricht')?.toString() || '',
      source: theme.toUpperCase()
    };

    try {
      // Prefer sendBeacon to avoid CORS/preflight issues with external webhooks
      const payload = JSON.stringify(data);
      const beaconOk = navigator.sendBeacon(
        'https://n8n-pro-oh9w.onrender.com/webhook-test/kontakt',
        new Blob([payload], { type: 'text/plain;charset=UTF-8' })
      );

      if (!beaconOk) {
        // Fallback: no-cors fetch with a "simple" request (no custom headers)
        await fetch('https://n8n-pro-oh9w.onrender.com/webhook-test/kontakt', {
          method: 'POST',
          mode: 'no-cors',
          body: payload,
          keepalive: true
        });
      }

      toast({
        title: "Anfrage gesendet",
        description: "Vielen Dank für deine Anfrage! Wir melden uns bald bei dir.",
        duration: 5000
      });
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black mb-2 text-left sm:text-3xl">
            <span style={{
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }} className="text-3xl font-semibold">Get in touch!</span>
          </DialogTitle>
          <p className="text-muted-foreground text-left">Erzählen Sie uns von Ihrem Projekt - wir melden uns zeitnah bei Ihnen</p>
        </DialogHeader>

        <motion.form onSubmit={handleSubmit} className="space-y-6 mt-6" initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1
            }
          }
        }}>
          <motion.div className="space-y-4" variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}>
            {[{
              id: "name",
              label: "Name *",
              type: "text",
              placeholder: "Ihr Name",
              required: true
            }, {
              id: "email",
              label: "E-Mail *",
              type: "email",
              placeholder: "ihre@email.com",
              required: true
            }, {
              id: "position",
              label: "Position *",
              type: "text",
              placeholder: "Ihre Position",
              required: true
            }, {
              id: "firma",
              label: "Firma *",
              type: "text",
              placeholder: "Ihr Unternehmen",
              required: true
            }, {
              id: "telefon",
              label: "Telefon",
              type: "tel",
              placeholder: "Ihre Telefonnummer",
              required: false
            }].map(field => (
              <motion.div key={field.id} className="space-y-2" variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3 }
                }
              }}>
                <Label htmlFor={field.id} className="text-foreground font-medium">
                  {field.label}
                </Label>
                <Input 
                  id={field.id} 
                  name={field.id} 
                  type={field.type} 
                  placeholder={field.placeholder} 
                  required={field.required} 
                  className="bg-background/50 border-border focus:border-primary transition-colors" 
                />
              </motion.div>
            ))}
            
            <motion.div className="space-y-2" variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 }
              }
            }}>
              <Label htmlFor="nachricht" className="text-foreground font-medium">
                Nachricht *
              </Label>
              <Textarea 
                id="nachricht" 
                name="nachricht" 
                placeholder="Erzählen Sie uns von Ihrem Projekt..." 
                required 
                className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" 
              />
            </motion.div>
          </motion.div>

          <motion.div variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3 }
            }
          }}>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting} 
              className="w-full text-white font-bold" 
              style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};
