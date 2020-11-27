import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AddBasketButtonProps = {
  onClick: () => void;
};

const AddBasketButton: React.FunctionComponent<AddBasketButtonProps> = ({
  onClick,
}) => {
  return (
    <button className="article-add-basket" onClick={onClick}>
      <FontAwesomeIcon icon="shopping-basket" color="white" />
    </button>
  );
};

export default AddBasketButton;
