import { useNavigate } from "react-router-dom";
import { ContactFormModal } from "@/components/ContactFormModal";
import SEOHead from "@/components/SEOHead";
import { contact as CONTACT_STATIC } from "@/content/pages/contact";
import { useCms } from "@/hooks/useCms";

const Contact = () => {
  // Inhalte live aus dem CMS (Strapi); Fallback: statischer Content-Layer
  const contact = useCms("kontakt", CONTACT_STATIC);
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={contact.seo.title}
        description={contact.seo.description}
        canonical={contact.seo.canonical}
      />
      <ContactFormModal
        isOpen={true}
        onClose={handleClose}
        accentColor="#ffffff"
        gradientFrom="#333333"
        gradientTo="#000000"
        theme="studio"
      />
    </div>
  );
};

export default Contact;
