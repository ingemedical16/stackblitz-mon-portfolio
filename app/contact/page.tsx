import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";



const ContactPage = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulaire de Contact */}
        <ContactForm />

        {/* Informations de Contact */}
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactPage;

