import React from "react";
import Styles from "./products.scss";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "./products.scss";
import img2 from "../../assets/men.png";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart } from "../../redux/slice/cartSlice.js";
export default function Products({ title, description, products, loading }) {
  const dispatch = useDispatch();
  const handdelAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* title & description dynamic */}
          <div
            className={`${Styles.comon_text} d-flex align-items-start flex-column`}
          >
            <h1
              style={{
                fontSize: "30px",
                textTransform: "uppercase",
                fontFamily: "Roboto Condensed",
                fontWeight: 300,
              }}
            >
              {title}
            </h1>
            <span
              style={{
                fontSize: "15px",
                fontFamily: "Roboto Condensed",
                fontWeight: 200,
                color: "#888888",
              }}
            >
              {description}
            </span>
            <hr
              style={{
                width: "4%",
                margin: "1rem 0",
                color: "black",
                border: "0",
                borderTop: "2px solid black",
                opacity: 1,
              }}
            />
          </div>
          <>
            <div className="swiper_rap ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                dir="ltr"
                navigation={{
                  nextEl: ".review-swiper-button-next",
                  prevEl: ".review-swiper-button-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {loading ? (
                  <div className="cards d-flex ">
                    <div class="card is-loading">
                      <div class="image"></div>
                      <div class="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                    <div class="card is-loading">
                      <div class="image"></div>
                      <div class="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                    <div class="card is-loading">
                      <div class="image"></div>
                      <div class="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                    <div class="card is-loading">
                      <div class="image"></div>
                      <div class="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {products.map((product) => (
                      <SwiperSlide key={product.id}>
                        <img className="img_product" src={product.image} />
                        <div className="px-5 mt-3 d-flex flex-column align-content-start">
                          <div className="d-flex align-items-center justify-content-between">
                            <Link to={`/product/${product.id}`}>
                              <h1
                                style={{
                                  color: "#222",
                                  fontWeight: "300",
                                  fontSize: "20px",
                                  textTransform: "capitalize",
                                }}
                              >
                                {product.title.slice(0, 15)}..
                              </h1>
                            </Link>
                            <span
                              onClick={() => handdelAddToCart(product)}
                              className="add-to-cart"
                            >
                              <i class="fa-solid fa-plus"></i>
                            </span>
                          </div>
                          <span class="product-terms">
                            <Link
                              style={{
                                color: "#888",
                                fontWeight: "300",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                textDecoration: "none",
                              }}
                              to="https://themes.laborator.co/aurum/fashion/product-category/accessories/"
                            >
                              {product.category}
                            </Link>
                          </span>
                          <bdi className="mt-1">
                            <span class="woocommerce-Price-currencySymbol">
                              £
                            </span>
                            {product.price}
                          </bdi>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}

                <div className={`lag_position`}>
                  <div
                    onClick={() => handleDecreaseCart(products)}
                    className="review-swiper-button-prev "
                  >
                    <i role={"button"} class="fa-solid fa-chevron-left"></i>
                  </div>
                  <div className="review-swiper-button-next ">
                    <i role={"button"} class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
