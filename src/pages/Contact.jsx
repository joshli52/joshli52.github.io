
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import swal from 'sweetalert';
function Contact () {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9j31xiq', 'template_8p7d6lc', form.current, 'Exy-KwzBNOkCD4z67')
      .then((result) => {
          console.log(result.text);
          swal("Success!", "Thanks for the message", "success")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          swal("Something Went Wrong!", "Please email me directly at j85li@uwaterloo.ca", "error")
          // don't clear since user may want to reference their previous message
      });
  };

  return (
    <div className = "form-bg">
      <section className = "form-outline">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" name="user_name" />
          <label>Your Email</label>
          <input type="email" name="user_email" />
          <label>Message Content</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>

  );
};
export default Contact;
