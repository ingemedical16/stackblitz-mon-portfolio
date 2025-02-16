import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Nos Coordonnées</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-600" />
          <span>+33 7 55 48 49 23</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-600" />
          <span>mohammedelidrissi.fr78@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span>Paris, France</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
