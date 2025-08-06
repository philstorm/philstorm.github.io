// src/components/Contact.tsx
import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // mark any empty fields
    setNameError(!name);
    setEmailError(!emailOrPhone);
    setMessageError(!message);

    if (name && emailOrPhone && message) {
      // build mailto URL
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nContact: ${emailOrPhone}\n\n${message}`
      );

      // redirect to mail client
      window.location.href =
        `mailto:phil.afuwape@gmail.com?subject=${subject}&body=${body}`;

      // clear form
      setName('');
      setEmailOrPhone('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
    }
  };

  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <p>
        Want To Be Compliant? Longing For Organizational Value? Let’s connect!
      </p>

      <form className="contact-form" noValidate>
        <input
          type="text"
          placeholder="Your Name *"
          value={name}
          onChange={e => setName(e.target.value)}
          className={nameError ? 'error' : ''}
        />

        <input
          type="text"
          placeholder="Email or Phone *"
          value={emailOrPhone}
          onChange={e => setEmailOrPhone(e.target.value)}
          className={emailError ? 'error' : ''}
        />

        <textarea
          placeholder="Message *"
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className={messageError ? 'error' : ''}
        />

        <button type="submit" onClick={handleSend}>
          Send ➤
        </button>
      </form>
    </div>
  );
}
