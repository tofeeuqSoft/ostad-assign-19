import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white  pt-5 mt-3">
      <div className="container px-3">
        <div className="row ">
          <div className="col-lg-3 mb-5 text-justify">
            <h3 className="text-white mb-4">Shop</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quisquam aut eos pariatur eius obcaecati totam, distinctio porro
              ipsam suscipit quo ab fugiat, ratione animi cumque laboriosam
              soluta, placeat libero?
            </p>
          </div>

          <div className="col-lg-9">
            <div className=" d-flex justify-content-evenly gap-5 ps-md-5 flex-column flex-sm-row">
              <div className=" text-left">
                <h3 className="text-white  mb-4">Services</h3>
                <ul>
                  <li>
                    <Link className="text-white" to="#">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Services Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" text-left">
                <h3 className="text-white mb-4">Contact Info</h3>
                <ul>
                  <li>
                    <Link className="text-white " to="#">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="#">
                      Services Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" text-left">
                <h3 className="text-white mb-4">Contact Info</h3>
                <ul>
                  <li>Address: Your Address Goes Here.</li>
                  <li>Phone/Fax: 0123456789</li>
                  <li>Email: demo@example.com</li>
                  <li>demo@example.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
