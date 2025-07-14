import "./Modal.css";

function Modal({ shouldOpen, setShouldOpen, children }) {
  const closeModal = function () {
    setShouldOpen(false);
  };

  return (
    <section className={`modal ${shouldOpen ? "open" : ""}`}>
      <div className="close-modal">
        <button className="close-button" onClick={closeModal}>
          <span className="close-icon">
            <span className="bar bar-vertical"></span>
            <span className="bar bar-horizontal"></span>
          </span>
        </button>
      </div>

      {children ? (
        children
      ) : (
        <div className="modal-content">
          <h2>Modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            corrupti doloribus necessitatibus consequuntur vitae ratione nostrum
            dolorum delectus enim iusto ut sed sunt dignissimos eaque, et
            numquam consequatur, mollitia in?
          </p>
        </div>
      )}
    </section>
  );
}

export default Modal;
