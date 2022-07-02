import styled from "styled-components";
import Funiro from "./../Header/Funiro.png";
import Loopa from "./../Header/loop.svg";
import Like from "./../Header/love.svg";
import Cart from "./../Header/Cart.svg";
import Person from "./../Header/person.svg";
import "./styles.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Main = styled.div`
  background-image: linear-gradient(90deg, #f9f1e7 68%, #fcf8f3 60.5%);
  width: 100%;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  img {
    align-self: center;
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  img {
    margin-right: 41px;
  }
  ul {
    list-style: none;
    display: flex;
    column-gap: 40px;
    margin-right: 43px;
    li {
      a {
        text-decoration: none;
        color: #3a3a3a;
        font-size: 16px;
        transition: 0.5s ease-in-out;
        &:hover {
          color: grey;
        }
      }
    }
  }
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  width: 480px;
  img {
    margin-right: 15px;
  }
  input {
    outline: none;
    border: none;
    color: #3a3a3a;
    font-size: 16px;
    font-family: "Gilroy";
    width: 60%;
  }
`;

const Account = styled.div`
  display: flex;
  column-gap: 50px;
`;

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    document.body.classList.toggle("lock", setActive(!isActive));
  };

  const closeSideBar = () => {
    setActive(false);
    document.body.classList.toggle("lock", setActive(false));
  };

  let activeClassName = "activated";

  return (
    <div>
      <div className={isActive ? "sidenav activemove" : "sidenav"}>
        <NavLink to="/intro" onClick={closeSideBar}>
          <a href="#" className="sidelink">
            Introduction
          </a>
        </NavLink>
        <NavLink to="/our-products" onClick={closeSideBar}>
          <a href="#">Products</a>
        </NavLink>
        <NavLink to="/beautiful" onClick={closeSideBar}>
          <a href="#">Inspiration</a>
        </NavLink>
        <NavLink to="/tips" onClick={closeSideBar}>
          <a href="#">Tips</a>
        </NavLink>
        <NavLink to="/photos" onClick={closeSideBar}>
          <a href="#">Furniture</a>
        </NavLink>
        <div className="white-line"></div>
      </div>
      <div className="resp-menu-sticky">
        <div className="responsive_menu">
          <div className="logo">
            <img src={Funiro} alt="guest-house-small.png" />
          </div>
          <div
            onClick={toggleClass}
            className={
              isActive ? "nav-button closebtn active" : "nav-button closebtn"
            }
          >
            <span></span>
          </div>
        </div>
      </div>
      <Main>
        <Container>
          <Navigation className="navigation-none">
            <Inputs className="tags-names">
              <img src={Funiro} alt="funiro" />
              <ul>
                <li>
                  <NavLink
                    to="/intro"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                   Introduction
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/our-products" className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/beautiful" className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }>
                    Inspiration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tips" className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }>
                    Tips
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/photos" className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }>
                   Furniture
                  </NavLink>
                </li>
              </ul>
              <Searchbar>
                <img src={Loopa} alt="Loopa" />
                <input type="text" placeholder="Search for minimalist chair" />
              </Searchbar>
            </Inputs>
            <Account>
              <img src={Like} alt="Like" />
              <img src={Cart} alt="Cart" />
              <img src={Person} alt="Person" />
            </Account>
          </Navigation>
        </Container>
      </Main>
    </div>
  );
};

export default Header;
