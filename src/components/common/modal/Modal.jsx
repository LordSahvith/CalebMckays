import { useEffect } from "react";
import "./Modal.css";

function Modal({ modalName = "", shouldOpen, setShouldOpen, children }) {
  const closeModal = function () {
    setShouldOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = function (event) {
      if (event.key === "Escape") {
        setShouldOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  console.log(modalName);

  return (
    <section
      autoFocus={shouldOpen}
      className={`modal ${modalName} ${shouldOpen ? "open" : ""}`}
    >
      <div className="close-modal">
        <button className="close-button" onClick={closeModal}>
          <span className="close-icon">
            <span className="bar bar-vertical"></span>
            <span className="bar bar-horizontal"></span>
          </span>
        </button>
      </div>

      <div className="modal-content">
        {children ? (
          children
        ) : (
          <div className="modal-content">
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              corrupti doloribus necessitatibus consequuntur vitae ratione
              nostrum dolorum delectus enim iusto ut sed sunt dignissimos eaque,
              et numquam consequatur, mollitia in?
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Modal;
