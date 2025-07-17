import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.current.user_name.value.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!form.current.user_email.value.trim()) {
      alert("Please enter a valid email.");
      return;
    }
    const contactNumber = form.current.contact.value.trim();
    if (!/^\d{10}$/.test(contactNumber)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
    if (!form.current.message.value.trim()) {
      alert("Please enter a message.");
      return;
    }

    emailjs.sendForm(
      'service_g12o1jr', // ✅ Replace with your actual service ID
      'template_m0b5c9c', // ✅ Replace with your actual template ID
      form.current,
      'KxpDLw-AKvYZW4iPb' // ✅ Your public API key (use exactly like this, not inside an object)
    )
      .then(
        () => {
          setStatus('SUCCESS');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('FAILED');
        }
      );
  };

  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Contact Me</h2>

        {status === 'SUCCESS' && (
          <div className="alert alert-success text-center" role="alert">
            Thank you! Your message has been sent.
          </div>
        )}

        {status === 'FAILED' && (
          <div className="alert alert-danger text-center" role="alert">
            Oops! Something went wrong.
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input type="tel" name="contact" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
