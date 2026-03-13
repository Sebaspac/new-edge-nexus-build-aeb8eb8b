import { useNavigate } from "react-router-dom";
import { ContactFormModal } from "@/components/ContactFormModal";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
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
