import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { slice } from "lodash";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slice/cartSlice.js";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  };
  const [index, setIndex] = useState(8);
  const initialProducts = slice(products, 0, index);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);
  const loadMore = () => {
    setIndex(index + 5);
    if (index >= products.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  return (
    <>
      {loader ? (
        <div className="box-loader d-flex flex-column justify-content-center align-items-center">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="woocommerce-shop-header d-flex align-items-center justify-content-between woocommerce-shop-header--columned">
              <div className="woocommerce-shop-header--title">
                <h1 style={{ fontSize: "31px" }} className="page-title">
                  Shop
                  <small>
                    <p className="woocommerce-result-count">
                      Showing 1–8 of {products.length} results
                    </p>
                  </small>
                </h1>
              </div>
            </div>
            {initialProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-12 my-5">
                <img className="img_product" src={product.image} />
                <div className=" mt-3 d-flex flex-column align-content-start">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1
                      style={{
                        color: "#222",
                        fontWeight: "300",
                        fontSize: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      <Link className="text-dark" to={`/product/${product.id}`}>
                        {product.title.slice(0, 20)}...
                      </Link>
                    </h1>
                    <span
                      onClick={() => handleAddToCart(product)}
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
                      to="/shop"
                    >
                      {product.category}
                    </Link>
                  </span>
                  <bdi className="mt-1">
                    <span class="woocommerce-Price-currencySymbol">£</span>
                    {product.price}
                  </bdi>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              {isCompleted ? (
                ""
              ) : (
                <button onClick={() => loadMore()} className="btn_loadMore">
                  Load More
                  {isCompleted ? <span class="loader_2"></span> : ""}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
