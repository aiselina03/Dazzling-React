import React from "react";
import "./style.scss"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <div className="other">
            <h3>Other Pages</h3>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Shortcodes</li>
              <li>About</li>
              <li>Languages</li>
            </ul>
          </div>
          <div className="logo">
            <img
              src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png"
              alt=""
            />
            <p>
              Awesome and completely free WordPress WooCommerce themes to take
              your ecommerce website to the next level.
            </p>
            <p>
              If you are having problems with theme setup, please feel free to
              use Colorlib support forum.
            </p>
          </div>
        </div>
        <div className="foot2">
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Shortcodes</li>
              <li>About</li>
              <li>Languages</li>
            </ul>
          </div>
          <p>
            Dazzling Demo All rights reserved. Theme by Colorlib Powered by
            WordPress
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
