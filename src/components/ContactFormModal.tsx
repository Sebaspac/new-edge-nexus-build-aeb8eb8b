import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  validateContactForm,
  submitContactForm,
  checkRateLimit,
  recordSubmission,
  isHoneypotTriggered,
} from "@/utils/contactFormValidation";

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
  theme,
}: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setFormStatus(null);
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('website_url')?.toString();
    if (isHoneypotTriggered(honeypot)) {
      setFormStatus({ type: 'success', message: 'Nachricht gesendet! Wir melden uns bald.' });
      form.reset();
      setIsSubmitting(false);
      return;
    }

    // Rate limit
    const rl = checkRateLimit();
    if (!rl.allowed) {
      setFormStatus({ type: 'error', message: rl.error! });
      setIsSubmitting(false);
      return;
    }

    // Validate
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      company: formData.get('company')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    const validation = validateContactForm(rawData);
    if (!validation.success) {
      setFieldErrors(validation.fieldErrors || {});
      setIsSubmitting(false);
      return;
    }

    // Submit
    const result = await submitContactForm(validation.data!);

    if (result.success) {
      recordSubmission();
      setFormStatus({ type: 'success', message: 'Nachricht gesendet! Wir melden uns bald.' });
      form.reset();
    } else {
      setFormStatus({ type: 'error', message: result.error || 'Ein Fehler ist aufgetreten.' });
    }

    setIsSubmitting(false);
  };

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (!isOpen) {
      setFieldErrors({});
      setFormStatus(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black mb-2 text-left sm:text-3xl">
            <span
              style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="text-3xl font-semibold"
            >
              Get in touch!
            </span>
          </DialogTitle>
          <p className="text-muted-foreground text-left">
            Erzählen Sie uns von Ihrem Projekt – wir melden uns zeitnah bei Ihnen
          </p>
        </DialogHeader>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {/* Honeypot */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="website_url">Website URL (leave empty)</label>
            <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
          </div>

          <motion.div className="space-y-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}>
            {/* Name */}
            <motion.div className="space-y-2" variants={fieldVariants}>
              <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
              <Input id="name" name="name" type="text" placeholder="Ihr Name" required maxLength={120} className="bg-background/50 border-border focus:border-primary transition-colors" />
              {fieldErrors.name && <p className="text-sm text-destructive">{fieldErrors.name}</p>}
            </motion.div>

            {/* Email */}
            <motion.div className="space-y-2" variants={fieldVariants}>
              <Label htmlFor="email" className="text-foreground font-medium">E-Mail *</Label>
              <Input id="email" name="email" type="email" placeholder="ihre@email.com" required maxLength={200} className="bg-background/50 border-border focus:border-primary transition-colors" />
              {fieldErrors.email && <p className="text-sm text-destructive">{fieldErrors.email}</p>}
            </motion.div>

            {/* Message */}
            <motion.div className="space-y-2" variants={fieldVariants}>
              <Label htmlFor="message" className="text-foreground font-medium">Nachricht *</Label>
              <Textarea id="message" name="message" placeholder="Erzählen Sie uns von Ihrem Projekt..." required maxLength={5000} className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none" />
              {fieldErrors.message && <p className="text-sm text-destructive">{fieldErrors.message}</p>}
            </motion.div>
          </motion.div>

          {/* Inline status messages */}
          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium ${
                formStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                  : 'bg-destructive/10 text-destructive border border-destructive/20'
              }`}
            >
              {formStatus.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              {formStatus.message}
            </motion.div>
          )}

          <motion.div variants={fieldVariants}>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-white font-bold"
              style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  Nachricht senden
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};
