import { useState, FormEvent } from 'react';

type Contact = {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

import './ContactForm.css';

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    subject: 'Soucis pour se connecter',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('full message : ', contact);
  };

  return (
    <div className="contact-form-container">
      <h2>Envoyez nous un message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="sub-container">
          <div className="small-input-container">
            <label
              htmlFor="lastname"
              className="text-left block text-m font-medium leading-6 text-gray-900"
            >
              Votre nom
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                required
                value={contact.lastname}
                onChange={(e) => setContact({ ...contact, lastname: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="small-input-container">
            <label
              htmlFor="firstname"
              className="text-left block text-m font-medium leading-6 text-gray-900"
            >
              Votre prénom
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                required
                onChange={(e) => setContact({ ...contact, firstname: e.target.value })}
                value={contact.firstname}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="sub-container">
          <div className="small-input-container">
            <label
              htmlFor="email"
              className="text-left block text-m font-medium leading-6 text-gray-900"
            >
              Adresse email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                value={contact.email}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="small-input-container">
            <label
              htmlFor="phone"
              className="text-left block text-m font-medium leading-6 text-gray-900"
            >
              Numéro de téléphone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                required
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="text-left block text-m font-medium leading-6 text-gray-900"
          >
            Le sujet
          </label>
          <div className="mt-2">
            <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
              <option value="Soucis pour se connecter">Soucis pour se connecter</option>
              <option value="Intéressé(e) par un bien">Intéressé(e) par un bien</option>
              <option value="Déposer une annonce">Déposer une annonce</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-left block text-m font-medium leading-6 text-gray-900"
          >
            Votre message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
