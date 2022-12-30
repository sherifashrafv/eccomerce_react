import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
export default function footer() {
  return (
    <div className={`site-footer d-flex align-items-center`}>
      <div className="container">
        <div className="row ">
          <div class="col-md-3 col-sm-4">
            <div class="widget sidebar widget_nav_menu nav_menu-2">
              <h3>What’s Hot</h3>
              <div class="menu-whats-hot-container">
                <ul id="menu-whats-hot" class="menu">
                  <li
                    id="menu-item-373"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      Discount Voucher
                    </Link>
                  </li>
                  <li
                    id="menu-item-374"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      Spring Collection
                    </Link>
                  </li>
                  <li
                    id="menu-item-375"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      Trending
                    </Link>
                  </li>
                  <li
                    id="menu-item-376"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      Bestsellers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4">
            <div class="widget sidebar widget_nav_menu nav_menu-2">
              <h3>Brands</h3>
              <div class="menu-whats-hot-container">
                <ul id="menu-whats-hot" class="menu">
                  <li
                    id="menu-item-373"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      JACK&JONES
                    </Link>
                  </li>
                  <li
                    id="menu-item-374"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      CALVIN KLEIN
                    </Link>
                  </li>
                  <li
                    id="menu-item-375"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      RAY BAN
                    </Link>
                  </li>
                  <li
                    id="menu-item-376"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      RIVER ISLAND
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4">
            <div class="widget sidebar widget_nav_menu nav_menu-2">
              <h3>MEN SHOP</h3>
              <div class="menu-whats-hot-container">
                <ul id="menu-whats-hot" class="menu">
                  <li
                    id="menu-item-373"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      JACK&TOPS
                    </Link>
                  </li>
                  <li
                    id="menu-item-374"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      BOTTOMS
                    </Link>
                  </li>
                  <li
                    id="menu-item-375"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      ACCESSORIES
                    </Link>
                  </li>
                  <li
                    id="menu-item-376"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      SHOES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4">
            <div class="widget sidebar widget_nav_menu nav_menu-2">
              <h3>WOMEN SHOP</h3>
              <div class="menu-whats-hot-container">
                <ul id="menu-whats-hot" class="menu">
                  <li
                    id="menu-item-373"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      JEANS
                    </Link>
                  </li>
                  <li
                    id="menu-item-374"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-374"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      DRESSES
                    </Link>
                  </li>
                  <li
                    id="menu-item-375"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-375"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      OTHER
                    </Link>
                  </li>
                  <li
                    id="menu-item-376"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-376"
                  >
                    <Link onClick={() => window.scroll(0, 0)} to="/shop">
                      SHOES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6 anchor">
              © Copyright 2021 |{" "}
              <Link
                onClick={() => window.scroll(0, 0)}
                className="anchor_link_dark"
                to="/shop"
              >
                Aurum Theme
              </Link>
              by
              <Link
                onClick={() => window.scroll(0, 0)}
                className="anchor_link_dark"
                to="/"
              >
                Laborator
              </Link>
              <br />
              <div className="footer-menu">
                <ul>
                  <li
                    id="menu-item-397"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-397"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      to="/"
                      className="anchor_link"
                    >
                      Privacy &amp; Cookies
                    </Link>
                  </li>
                  <li
                    id="menu-item-398"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-398"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      to="/shop"
                      className="anchor_link"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li
                    id="menu-item-399"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-399"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      to="/shop"
                      className="anchor_link"
                    >
                      Accessibility
                    </Link>
                  </li>
                  <li
                    id="menu-item-400"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-400"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      className="anchor_link"
                      to="/shop"
                    >
                      Store
                    </Link>
                  </li>
                  <li
                    id="menu-item-401"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-401"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      className="anchor_link"
                      to="/shop"
                    >
                      Directory
                    </Link>
                  </li>
                  <li
                    id="menu-item-402"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-402"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      className="anchor_link"
                      to="/"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="payment-methods pull-right ">
                <li>
                  <Link
                    onClick={() => window.scroll(0, 0)}
                    className="text-decoration-none"
                    to="/shop"
                  >
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/ups.png"
                      loading="lazy"
                      alt="ups"
                      width={19}
                      height={22}
                    />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scroll(0, 0)} to="/shop">
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/dhl.png"
                      loading="lazy"
                      alt="dhl"
                      width={73}
                      height={10}
                    />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scroll(0, 0)} to="/shop">
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/fedex.png"
                      loading="lazy"
                      alt="fedex"
                      width={52}
                      height={14}
                    />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scroll(0, 0)} to="/shop">
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/visa.png"
                      loading="lazy"
                      alt="visa"
                      width={38}
                      height={11}
                    />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scroll(0, 0)} to="/shop">
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/paypal.png"
                      loading="lazy"
                      alt="paypal"
                      width={55}
                      height={15}
                    />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scroll(0, 0)} to="/shop">
                    <img
                      src="https://themes.laborator.co/aurum/fashion/wp-content/uploads/2016/04/mastercard.png"
                      loading="lazy"
                      alt="mastercard"
                      width={28}
                      height={17}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
