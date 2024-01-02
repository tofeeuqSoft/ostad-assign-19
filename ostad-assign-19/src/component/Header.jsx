import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="main-wrapper">
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <div className="welcome-text">
                  <p>World Wide Completely Free Returns and Shipping</p>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <div className="top-nav">
                  <ul>
                    <li>
                      <Link to="tel:0123456789">
                        <i className="fa fa-phone"></i> +012 3456 789
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:demo@example.com">
                        <i className="fa fa-envelope-o"></i> demo@example.com
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-user"></i> Account
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom d-none d-lg-block">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-3 col">
                <div className="header-logo">
                  <Link to="/">
                    <h2 className="text-white">Shop</h2>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="search-element">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col">
                <div className="header-actions">
                  <Link
                    to="#offcanvas-wishlist"
                    className="header-action-btn offcanvas-toggle"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                  <Link
                    to="#offcanvas-cart"
                    className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                    <span className="header-action-num">01</span>
                  </Link>
                  <Link
                    to="#offcanvas-mobile-menu"
                    className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none"
                  >
                    <i className="pe-7s-menu"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
