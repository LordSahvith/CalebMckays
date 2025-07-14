import { useState } from "react";
import ContactModal from "./ContactModal";
import "./Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = function () {
    setIsOpen(true);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-title">
          <h3>Contact</h3>
        </div>

        <div className="contact-content">
          <div className="contact-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, quaerat soluta eveniet natus, eaque nostrum quod
              sequi quibusdam quasi est quae dolor amet veniam ipsum dolores
              aliquid possimus rerum adipisci?
            </p>
          </div>
          <div className="contact-button">
            <button onClick={toggleModal}>Contact</button>
          </div>
        </div>
      </section>
      <ContactModal shouldOpen={isOpen} setShouldOpen={setIsOpen} />
    </>
  );
}

export default Contact;
