import "./Contact.css";

function Contact({ modalAction }) {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-title appear-on-scroll">
          <h3>Contact</h3>
        </div>

        <div className="contact-content">
          <div className="contact-description appear-on-scroll">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, quaerat soluta eveniet natus, eaque nostrum quod
              sequi quibusdam quasi est quae dolor amet veniam ipsum dolores
              aliquid possimus rerum adipisci?
            </p>
          </div>
          <div className="contact-button appear-on-scroll">
            <button onClick={modalAction}>Get In Touch</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
