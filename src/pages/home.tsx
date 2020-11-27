import "../styles/home.css";
import articleImg from "../assets/images/Caps-ficha-G2_1195390469_198179_1440x810.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Search from "../components/Search";
import Article from "../components/Article";

function Home() {
  const [navbarOpened, setNavbarOpened] = useState("closed");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="nav">
        <ul>
          <div className="nav-left">
            <li>
              <button
                className="nav-button"
                onClick={() =>
                  navbarOpened === "closed"
                    ? setNavbarOpened("opened")
                    : setNavbarOpened("closed")
                }
              >
                <FontAwesomeIcon icon="bars" />
              </button>
              <a className="nav-logo" href="#under-contract">
                Logo
              </a>
            </li>
          </div>
          <div className={`nav-content ${navbarOpened}`}>
            <div className="nav-links">
              <li className="nav-item selected">
                <a href="#under-contract">Under contract</a>
              </li>
              <li className="nav-item">
                <a href="#under-contract">Free agent</a>
              </li>
              <li className="nav-item">
                <a href="#under-contract">Staff</a>
              </li>
            </div>
            <div className="nav-right">
              <li className="nav-search">
                {!showSearch && (
                  <button onClick={() => setShowSearch((state) => !state)}>
                    <FontAwesomeIcon
                      className="fa-2x"
                      icon="search"
                      color="white"
                    />
                  </button>
                )}
                {showSearch && (
                  <Search show={showSearch} setShowSearch={setShowSearch} />
                )}
              </li>
              <li className="nav-basket">
                <button>
                  <FontAwesomeIcon
                    className="fa-2x"
                    icon="shopping-basket"
                    color="white"
                  />
                </button>
              </li>
            </div>
          </div>
        </ul>
      </nav>
      <section className="hero">
        <h1>Under contract</h1>
      </section>
      <div className="page-content">
        <section className="page-filters">
          <span className="filter-results">Total X Results</span>
          <hr className="filter-divider" />
          <div className="filters">
            <span className="badge">Filter 1</span>
            <span className="badge">Filter 1</span>
            <span className="badge">Filter 1</span>
            <span className="badge">Filter 1</span>
          </div>
        </section>
        <section className="categories">
          <section className="favorites">
            <div className="category-title">
              <h2>Vos favoris</h2>
              <a href=".">Voir +</a>
            </div>
            <div className="articles">
              <Article
                image={articleImg}
                title="Caps"
                desc="Contract running with G2"
                price="5.800.750€ | 200k/month"
              />
              <Article
                image={articleImg}
                title="Caps"
                desc="Contract running with G2"
                price="5.800.750€ | 200k/month"
              />
              <Article
                image={articleImg}
                title="Caps"
                desc="Contract running with G2"
                price="5.800.750€ | 200k/month"
              />
              <Article
                image={articleImg}
                title="Caps"
                desc="Contract running with G2"
                price="5.800.750€ | 200k/month"
              />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
