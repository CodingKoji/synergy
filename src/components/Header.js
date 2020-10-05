import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";

const navVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
  },
};

const Header = () => {
  const { userId, setUserId, setModalOpen } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
  };

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderWrapper>
      <nav>
        {size.width <= 720 ? (
          <div className="smallMenu">
            <Link to="/" className="brand">
              <span>Synergy</span>
            </Link>
            <img
              src="https://img.icons8.com/fluent-systems-filled/24/000000/menu.png"
              alt="menu button"
              onClick={handleMenu}
            />
          </div>
        ) : (
          <>
            <div className="mainLinks">
              <Link to="/" className="brand">
                <span>Synergy</span>
              </Link>
              {!userId && (
                <>
                  <a href="#details">Details</a>
                  <a href="#features">Features</a>
                  <a href="#pricing">Pricing</a>
                </>
              )}
            </div>
            <div>
              {userId ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <button
                    className="login"
                    onClick={(e) => setModalOpen(e.target.className)}
                  >
                    Log In
                  </button>
                  <button
                    className="register"
                    onClick={(e) => setModalOpen(e.target.className)}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </nav>
      <motion.div
        animate={menuOpen ? "visible" : "hidden"}
        variants={navVariants}
        className="smallNavigation"
      >
        {!userId ? (
          <>
            <div className="smallNavLinks">
              <a href="#details" onClick={handleMenu}>
                Details
              </a>
              <a href="#features" onClick={handleMenu}>
                Features
              </a>
              <a href="#pricing" onClick={handleMenu}>
                Pricing
              </a>
              <>
                <button
                  className="login"
                  onClick={(e) => setModalOpen(e.target.className)}
                >
                  Log In
                </button>
                <button
                  className="register"
                  onClick={(e) => setModalOpen(e.target.className)}
                >
                  Sign Up
                </button>
              </>
            </div>
            <img
              src="https://img.icons8.com/pastel-glyph/64/000000/cancel.png"
              alt="cancel button"
              className="cancelBtn"
              onClick={handleMenu}
            />
          </>
        ) : (
          <>
            <a href="#details">Details</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </motion.div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: #6c63ff;
  width: 100%;
  position: relative;
  z-index: 10;

  nav {
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #eee;
    margin-right: 1rem;
    font-size: 1.35rem;

    &:hover {
      color: #fff;
    }
  }

  button {
    background-color: #ff6684;
    color: white;
    font-size: 1.35rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0 0 0 1rem;
    cursor: pointer;
    &:hover {
      background-color: #ff8099;
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }

  .mainLinks {
    display: flex;
    align-items: center;
  }

  .brand {
    font-size: 2rem;
    display: flex;
    align-items: center;
    img {
      width: 30px;
    }
  }

  .smallMenu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      filter: invert(1);
      cursor: pointer;
      &:hover {
        transition: all 0.2s ease;
        transform: scale(1.1);
      }
    }
  }

  .smallNavigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #6c63ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .smallNavLinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button,
    a {
      margin: 0 0 1rem;
    }
  }

  .cancelBtn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    filter: invert(1);
    width: 50px;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.1);
    }
  }
`;
