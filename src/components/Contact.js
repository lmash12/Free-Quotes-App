import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqfu6vj",
        "template_6xe37aq",
        form.current,
        "nMAEWyJ8xHsmgeh0P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-msg">
        <h1
          style={{
            textAlign: "center",
            color: "rgb(39, 52, 82)",
            marginTop: "10%",
          }}
        >
          Get in touch
        </h1>
      </div>

      <main className="contact-sec">
        <form className="EmailForm form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter Your Name" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
