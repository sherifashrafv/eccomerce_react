import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import Styles from "./header.module.scss";
import flageEn from "../../assets/flag_great_britain.png";
import flageAr from "../../assets/Flag-Egypt.webp";
import logo from "../../assets/logo@2x.png";
import "./header.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import menu from "../../assets/menu.png";
import close from "../../assets/menu_2.png";
import cartImage from "../../assets/add-to-cart.png";
export default function Header({ userData, logOut }) {
  const { t, i18n } = useTranslation();
  const cart = useSelector((state) => state.cart);
  const [stickyClass, setFixedClass] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 250) {
      setFixedClass(true);
    } else {
      setFixedClass(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  const openModal = () => {
    setMenuModal(!menuModal);
  };
  return (
    <>
      <header className={`user_actions`}>
        <div className="container">
          <div className="row">
            <div
              className={`user_actions p-2 d-flex justify-content-between align-items-center`}
            >
              <div className="auth_user d-flex gap-2 align-items-center">
                <div
                  className={`register_routes d-flex gap-2  align-items-center`}
                >
                  {userData ? (
                    <div className="btn-logOut">
                      <Link onClick={logOut}>{t("logOut")}</Link>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center gap-3">
                      <Link className="text-decoration-none" to="/login">
                        <p className="login_link m-0">{t("Login")}</p>
                      </Link>
                      <p className="m-0">or</p>
                      <Link className="text-decoration-none" to="/register">
                        <p className="register_link m-0">{t("Register")}</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div className={`date`}>
                  {new Date().toLocaleString("en-US", { month: "long" })}{" "}
                  {new Date().toLocaleString("en-US", { day: "2-digit" })}/
                  {new Date().getFullYear()}
                </div>
              </div>
              <ul className={`user_action_2 gap-4`}>
                <li>
                  <Link to="/Stores">{t("Stores")}</Link>
                </li>
                {userData ? (
                  <li>
                    <Link to="/MyAccount">{t("MyAccount")}</Link>
                  </li>
                ) : (
                  ""
                )}
                {i18n.language == "en"}
                <li
                  role={"button"}
                  className={`lang_switcher d-flex position-relative align-items-center gap-1`}
                >
                  {i18n.language == "en" && (
                    <>
                      <span>English</span>
                      <img width={20} height={20} src={flageEn} />
                    </>
                  )}
                  {i18n.language == "ar" && (
                    <>
                      <span>عربي</span>
                      <img width={20} height={20} src={flageAr} />
                    </>
                  )}

                  <ul className={`dropdown_lang`}>
                    <li onClick={() => changeLang("en")}>
                      <a
                        href=""
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span>English</span>
                        <img src={flageEn} />
                      </a>
                    </li>
                    <li onClick={() => changeLang("ar")} className="  w-100">
                      <a
                        href=""
                        className="d-flex align-items-center justify-content-between"
                      >
                        <span>Arabic</span>
                        <img src={flageAr} />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className={stickyClass ? `navbarFixed` : `mt-3  navbar`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div style={{ gap: "7rem" }} className="d-flex align-items-center ">
              <Link onClick={() => window.scroll(0, 0)} to="/" className="logo">
                <img width={100} src={logo} />
              </Link>
              <div className={`links_outlet align-items-center gap-5`}>
                <NavLink
                  onClick={() => window.scroll(0, 0)}
                  className={({ isActive }) => (isActive ? `active_link` : "")}
                  to="/"
                >
                  {t("HOME")}
                </NavLink>
                <NavLink
                  onClick={() => window.scroll(0, 0)}
                  className={({ isActive }) => (isActive ? `active_link` : "")}
                  to="/shop"
                >
                  {t("SHOP")}
                </NavLink>
                <NavLink
                  onClick={() => window.scroll(0, 0)}
                  className={({ isActive }) => (isActive ? `active_link` : "")}
                  to="/contact-us"
                >
                  {t("CONTACT-US")}
                </NavLink>
                <NavLink
                  onClick={() => window.scroll(0, 0)}
                  className={({ isActive }) => (isActive ? `active_link` : "")}
                  to="/F.A.Q"
                >
                  {t("FAQ")}
                </NavLink>
              </div>
            </div>
            <div
              style={{ fontSize: "20px", gap: "30px" }}
              className={`actions_creator d-flex align-items-center `}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <Link
                onClick={() => window.scroll(0, 0)}
                to="/cart"
                className="position-relative"
                styels={{ color: "black !important" }}
              >
                <span className={`cart_length`}>{cart.cartItems.length}</span>
                <img src={cartImage} className="cart-icon" />
              </Link>
              <div
                role={"button"}
                className="mobile-menu"
                onClick={() => openModal()}
              >
                <img src={menu} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal_contacts */}
      <div
        onClick={() => openModal()}
        className={menuModal ? "modal-container_active" : "modal-container"}
      >
        <div
          className={
            menuModal ? "modal-content-menu_active" : "modal-content-menu"
          }
        >
          <div className="links_menu d-flex flex-column justify-content-between align-items-center w-100">
            <div
              role={"button"}
              onClick={() => openModal()}
              className="close_menu"
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
            <Link to="/" className="logo-menu">
              <img width={100} src={logo} />
            </Link>
            <div className={`d-flex flex-column gap-5`}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active_link_menu` : ""
                }
                to="/"
              >
                {t("HOME")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active_link_menu` : ""
                }
                to="/shop"
              >
                {t("SHOP")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active_link_menu` : ""
                }
                to="/contact-us"
              >
                {t("CONTACT-US")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active_link_menu` : ""
                }
                to="/F.A.Q"
              >
                {t("FAQ")}
              </NavLink>
              <div className="lines d-flex align-items-center flex-column gap-2">
                <span className="line_one"></span>
                <span className="line_two"></span>
                <span className="line_three"></span>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-2">
                <p className="mb-0">Search</p>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <Link
                  to="/cart"
                  className="position-relative d-flex justify-content-between"
                  styles={{ color: "black !important" }}
                >
                  <p>Cart</p>

                  <span className={`cart_length`}>{cart.cartItems.length}</span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </div>
            </div>
            <ul className={`user_action_2 d-flex flex-column gap-4`}>
              {i18n.language == "en"}
              <li
                style={{ background: "black", padding: "5px 20px" }}
                role={"button"}
                className={`lang_switcher d-flex position-relative w-100 align-items-center justify-content-between`}
              >
                {i18n.language == "en" && (
                  <>
                    <span>English</span>
                    <img width={20} height={20} src={flageEn} />
                  </>
                )}
                {i18n.language == "ar" && (
                  <>
                    <span>عربي</span>
                    <img width={20} height={20} src={flageAr} />
                  </>
                )}

                <ul className={`dropdown_lang`}>
                  <li onClick={() => changeLang("en")}>
                    <a
                      href=""
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>English</span>
                      <img src={flageEn} />
                    </a>
                  </li>
                  <li onClick={() => changeLang("ar")} className="  w-100">
                    <a
                      href=""
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>Arabic</span>
                      <img src={flageAr} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
