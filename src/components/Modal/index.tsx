import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../utils/modalContext";

const Modal = () => {
  const { handleModal, modal, title, image, desc, price } = useContext(
    ModalContext
  );
  const portalDiv = document.getElementById("root");

  useEffect(() => {
    console.log(handleModal, modal);
  });

  if (modal) {
    return portalDiv != null
      ? createPortal(
          <div className="modal-container">
            <div className="modal" onClick={(e) => e.preventDefault()}>
              <button
                className="basket-modal-close"
                onClick={() => {
                  handleModal();
                }}
              >
                <FontAwesomeIcon icon="times" color="grey" />
              </button>
              <img
                src={image}
                alt="img-commande"
                className="basket-modal-img"
              />
              <h2>{title}</h2>
              <p>{desc}</p>
              <p>Montant : {price}</p>
              <div className="modal-actions">
                <button className="modal-action-positive" onClick={handleModal}>
                  Valider
                </button>
                <button className="modal-action-negative" onClick={handleModal}>
                  Annuler
                </button>
              </div>
            </div>
          </div>,
          portalDiv
        )
      : null;
  } else return null;
};

export default Modal;
