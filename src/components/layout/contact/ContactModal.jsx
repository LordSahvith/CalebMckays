import Modal from "../../common/modal/Modal";
import Form from "../../common/forms/Form";
import { useState } from "react";

function ContactModal({ shouldOpen, setShouldOpen }) {
  const recipient = "caleb.mckay.a@gmail.com";
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubject = function (text) {
    setSubject(text.target.value);
  };

  const handleBody = function (text) {
    setBody(text.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);

    setShouldOpen(false);
    setSubject("");
    setBody("");

    // Open the link
    // window.location.href = mailtoLink;
    // window.open(mailtoLink);
    // console.log("Submitted");
  };

  return (
    <Modal shouldOpen={shouldOpen} setShouldOpen={setShouldOpen}>
      <h2>Contact Form</h2>
      <p style={{ color: "#d40000" }}>* Still in development</p>
      <Form
        action={handleSubmit}
        subject={subject}
        handleSubject={handleSubject}
        body={body}
        handleBody={handleBody}
      />

      <p>
        Reach me on
        <a
          className="underline-animated"
          href="https://www.linkedin.com/in/thecalebanderson/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </Modal>
  );
}

export default ContactModal;
