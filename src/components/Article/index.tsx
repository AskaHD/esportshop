import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useContext } from "react";
import { ModalContext } from "../../utils/modalContext";
import AddBasketButton from "../AddBasketButton";

type ArticleProps = {
  image: string;
  title: string;
  desc: string;
  price: string;
};

const Article: React.FunctionComponent<ArticleProps> = ({
  image,
  title,
  desc,
  price,
}) => {
  const { handleModal, handleContent } = useContext(ModalContext);
  const addBasket = useCallback(() => {
    handleModal();
    handleContent(title, image, desc, price);
  }, [handleModal, handleContent, title, image, desc, price]);

  return (
    <article className="article" style={{ backgroundImage: `url(${image})` }}>
      <button className="article-fav">
        <FontAwesomeIcon icon="star" color="#ff7a00" />
      </button>
      <div className="article-glass">
        <h5 className="article-title">{title}</h5>
        <p>{desc}</p>
        <div className="article-price">{price}</div>
      </div>
      <AddBasketButton onClick={addBasket} />
    </article>
  );
};

export default Article;
