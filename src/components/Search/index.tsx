import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchProps = {
  show: boolean;
  setShowSearch: (show: boolean) => void;
};

const Search: React.FunctionComponent<SearchProps> = ({
  show,
  setShowSearch,
}) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon="search" color="#ff7a00" />
      <input type="text" className="search-input"></input>
      <button
        className="search-close"
        onClick={() => {
          setShowSearch(!show);
        }}
      >
        <FontAwesomeIcon icon="times" color="grey" />
      </button>
    </div>
  );
};

export default Search;
