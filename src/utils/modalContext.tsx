import React, { ReactNode } from "react";
import Modal from "../components/Modal";
import useModal from "./useModal";

const ModalContext = React.createContext({
  modal: false,
  handleModal: () => {},
  handleContent: (
    image: string,
    title: string,
    desc: string,
    price: string
  ) => {},
  title: "",
  image: "",
  desc: "",
  price: "",
});
const { Provider } = ModalContext;

interface ProviderProps {
  children: ReactNode;
  // any other props that come into the component
}

let ModalProvider = ({ children }: ProviderProps) => {
  let {
    modal,
    handleModal,
    handleContent,
    title,
    image,
    desc,
    price,
  } = useModal();
  return (
    <Provider
      value={{ modal, handleModal, handleContent, title, image, desc, price }}
    >
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
