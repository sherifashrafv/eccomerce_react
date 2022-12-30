import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice.js";
import "./index.scss";
import Products from "../../components/products/index";
import { useTranslation } from "react-i18next";
export default function SingleProduct() {
  const params = useParams();

  const Quantity = useRef(null);
  const [mixProducts, setMixProducts] = useState([]);
  const { t } = useTranslation();
  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setMixProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  const [products, setProducts] = useState();
  const [loader, setLoader] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [loading, setLoading] = useState([true]);
  const dispatch = useDispatch();
  function minValUpdateHandler(e) {
    setMin((prevVal) => {
      const valInNum = +parseInt(e.target.value);
      if (valInNum < max) {
        return valInNum;
      }
      return max - 1;
    });
  }
  function maxValUpdateHandler(e) {
    setMax((prevVal) => {
      console.log(e.currentTarget.value);

      const valInNum = +parseInt(e.target.value);
      if (valInNum > min) {
        return valInNum;
      }
      return min + 1;
    });
  }
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };


  const getProduct = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {loader ? (
        <div className="box-loader d-flex flex-column justify-content-center align-items-center">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-image d-flex justify-content-center">
                <img src={products.image} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="summary entry-summary">
                <h1 className="product_title entry-title">{products.title}</h1>
                <small className="product-terms">
                  <Link to={`/shop`} rel="tag">
                    {products.category}
                  </Link>
                </small>
                <div className="woocommerce-product-details__short-description">
                  <p>{products.description}</p>
                </div>
                <p className="price">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      {products.price}
                    </bdi>
                  </span>
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="cart">
                  <div className="quantity buttons_added"></div>
                  <button
                    onClick={() => handleAddToCart(products)}
                    name="add-to-cart"
                    className="single_add_to_cart_button button alt wp-element-button"
                  >
                    Add to cart
                  </button>
                </form>
                <div
                  className="yith-wcwl-add-to-wishlist add-to-wishlist-301  no-icon wishlist-fragment on-first-load"
                  data-fragment-ref={301}
                  data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":true,"show_exists":false,"product_id":301,"parent_product_id":301,"product_type":"simple","show_view":true,"browse_wishlist_text":"Browse Wishlist","already_in_wishslist_text":"The product is already in the wishlist!","product_added_text":"Product added to Wishlist!","heading_icon":"","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":false,"item":"add_to_wishlist"}'
                ></div>
                <div className="product_meta">
                  <span>
                    Product ID: <strong>{products.id}</strong>
                  </span>
                  <span className="posted_in">
                    Category:
                    <a
                      href="https://themes.laborator.co/aurum/fashion/product-category/accessories/"
                      rel="tag"
                    >
                      {products.category}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Products
            title={`${t("BESTSELLERS")}`}
            description={`${t("FREESHIPPING")}`}
            products={mixProducts}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}
