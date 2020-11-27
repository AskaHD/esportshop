import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("Article title");
  const [image, setImage] = useState("Article img");
  const [desc, setDesc] = useState("Article desc");
  const [price, setPrice] = useState("Article price");

  const handleModal = () => {
    console.log(modal);
    setModal(!modal);
  };

  const handleContent = (
    title: string,
    image: string,
    desc: string,
    price: string
  ) => {
    setTitle(title);
    setImage(image);
    setDesc(desc);
    setPrice(price);
  };

  return { modal, handleModal, handleContent, title, image, desc, price };
};

export default useModal;
