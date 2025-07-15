import Modal from "../../common/modal/Modal";
import Form from "../../common/forms/Form";
import { useEffect, useState } from "react";

function ContactModal({ shouldOpen, setShouldOpen }) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleRecipient = function (text) {
    setRecipient(text.target.value);
  };

  const handleSubject = function (text) {
    setSubject(text.target.value);
  };

  const handleBody = function (text) {
    setBody(text.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log("email:", recipient);
    console.log("subject:", subject);
    console.log("msg:", body);

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);

    setShouldOpen(false);
    setRecipient("");
    setSubject("");
    setBody("");

    // Open the link
    // window.location.href = mailtoLink;
    console.log("Submitted");
  };

  return (
    <Modal shouldOpen={shouldOpen} setShouldOpen={setShouldOpen}>
      <h2>Contact Form</h2>
      <Form
        action={handleSubmit}
        recipient={recipient}
        handleRecipient={handleRecipient}
        subject={subject}
        handleSubject={handleSubject}
        body={body}
        handleBody={handleBody}
      />
    </Modal>
  );
}

export default ContactModal;
