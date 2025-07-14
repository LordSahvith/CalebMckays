import Form from "../../common/forms/Form";
import Modal from "../../common/modal/Modal";

function ContactModal({ shouldOpen, setShouldOpen }) {
  const handleSubmit = function () {
    console.log("Submitted");
    setShouldOpen(false);
  };

  return (
    <Modal shouldOpen={shouldOpen} setShouldOpen={setShouldOpen}>
      <h2>Contact Form</h2>
      <Form action={handleSubmit} />
    </Modal>
  );
}

export default ContactModal;
