//#region import component
import MiniCard from '../../components/Card/MiniCard';
import ContactForm from '../../components/form/ContactForm';

//#region import style
import './ContactPage.css';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import cover from '../../assets/cover-contact.jpg';

const ContactPage = () => {
  return (
    <>
      <div className="contact-container">
        <div className="left-side">
          <h1>Vous avez des questions ?</h1>
          <span className="subtitle-contact">
            Contactez nous via notre numéro de téléphone, par email ou en venant directement dans
            nos locaux. Nos agents seront ravis de vous accueillir. Nous avons également un
            formulaire de contact à votre disposition. Au plaisir de vous revoir !
          </span>
          <div className="contact-info-container">
            <MiniCard icon={PhoneIcon} text1="+334 74 57 57 57" text2={undefined} />
            <MiniCard icon={EnvelopeIcon} text1="RealEstate@re.fr" text2={undefined} />
            <MiniCard icon={MapPinIcon} text1="11 rue des entrepreuneurs" text2={'69007 Lyon'} />
          </div>
          <ContactForm />
        </div>
        <div className="right-side">
          <div className="img-contact-container">
            <img src={cover} alt="cover for contact page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
