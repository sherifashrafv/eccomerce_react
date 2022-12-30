import React, { useEffect, useState, useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.scss";
import Img1 from "../../assets/bg-1-1.png";
import Img_1 from "../../assets/collec.png";
import tt from "../../assets/ttt.png";
import men from "../../assets/men.png";
import { Link } from "react-router-dom";
import Products from "../../components/products";
import menImage from "../../assets/image1xxl10-360x500.jpg";
import shoseImage from "../../assets/image2xxl39-360x500.jpg";
import womenImage from "../../assets/image1xxl21-360x500.jpg";
import axios from "axios";
import { useTranslation } from "react-i18next";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);

  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  const { t } = useTranslation();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="mt-2">
        <Swiper
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color":
              "rgba(255,255,255,.75)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          dir="ltr"
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper postion-relative"
        >
          <SwiperSlide
            style={{ height: "500px" }}
            className="position-relative"
          >
            <img style={{ height: "500px" }} className="w-100" src={Img1} />
            <div
              className={`background_text d-flex align-items-center flex-column justify-content-center`}
            >
              <img className="img_text" src={Img_1} />
              <Link className="btn_brdr" to="/shop">
                {t("shopNow")}
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="position-relative">
            <img style={{ height: "500px" }} className="w-100" src={tt} />
            <div
              className={`background_text w-75 d-flex align-items-center justify-content-between`}
            >
              <div
                className={`men_div d-flex align-items-center justify-content-between`}
              >
                <div className="text_fashion d-flex flex-column align-content-start">
                  <h1
                    style={{
                      fontSize: "22.8718px",
                      fontWeight: "300",
                      textTransform: "uppercase",
                      fontFamily: "Roboto Condensed",
                    }}
                    className="mb-2"
                  >
                    {t("We represent")}
                  </h1>
                  <h1
                    style={{
                      fontSize: "45.7436px",
                      fontWeight: "300",
                      textTransform: "uppercase",
                      fontFamily: "Roboto Condensed",
                    }}
                  >
                    {t("London Street Style")}
                  </h1>
                  <Link
                    to="/shop"
                    className={`btn_darkness`}
                    style={{
                      background: "black",
                      border: "none",
                      width: "fit-content",
                      color: "white",
                      padding: "7px 27px",
                      marginTop: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    {t("shopNow")}
                  </Link>
                </div>
                <div className="image_men d-lg-block d-sm-none .d-md-none   d-flex justify-content-end">
                  <img className={`men_img`} src={men} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className={`lag_position`}>
            <div className="review-swiper-button-prev ">
              <i role={"button"} class="fa-solid fa-chevron-left"></i>
            </div>
            <div className="review-swiper-button-next">
              <i role={"button"} class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </Swiper>
      </div>
      <Products
        title={`${t("TRENDING")}`}
        description={`${t("MOST TRENDY CLOTHES")}`}
        products={products}
        loading={loading}
      />
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`categories_sections position-relative`}>
              <Link to="/shop" onClick={() => window.scroll(0, 0)}>
                <img className="w-100" src={menImage} />
                <div className={`overlay_abs`}></div>
                <div class={`banner_text_container`}>
                  <div class="banner-text-content border-color ">
                    <strong class="font-color border-color-top border-color-bottom">
                      {t("Men")}
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`categories_sections position-relative`}>
              <Link to="/shop" onClick={() => window.scroll(0, 0)}>
                <img className="w-100" src={shoseImage} />
                <div className={`overlay_abs`}></div>
                <div class={`banner_text_container`}>
                  <div class="banner-text-content border-color ">
                    <strong class="font-color border-color-top border-color-bottom">
                      {t("Shoes")}
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={`categories_sections position-relative`}>
              <Link to="/shop" onClick={() => window.scroll(0, 0)}>
                <img className="w-100" src={womenImage} />
                <div className={`overlay_abs`}></div>
                <div className={`banner_text_container`}>
                  <div className="banner-text-content border-color ">
                    <strong className="font-color border-color-top border-color-bottom">
                      {t("Women")}
                    </strong>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`lab_wpb_banner d-flex align-items-center justify-content-between`}
        >
          <div className="d-flex flex-column">
            <h2
              style={{ fontSize: "30px", display: "block", fontWeight: "300" }}
            >
              {t("NOVEMBER SALE")}
            </h2>
            <p
              style={{
                display: "block",
                color: "#777",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "300",
                marginTop: "10px",
              }}
            >
              {t("FREESHIPPING")}
            </p>
          </div>
          <div>
            <Link className={`btn_dark`} to="/shop">
              {t("shopNow")}
            </Link>
          </div>
        </div>
      </div>
      <Products
        title={`${t("BESTSELLERS")}`}
        description={`${t("FREESHIPPING")}`}
        products={products}
        loading={loading}
      />
    </>
  );
}
