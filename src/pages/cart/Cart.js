import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss";
import {
  removeFromCart,
  clearCart,
  getTotals,
} from "../../redux/slice/cartSlice";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clearShoppingCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);
  return (
    <>
      {cart.cartItems.length === 0 ? (
        <div className="shop-empty-cart-page cart-empty">
          <div className="container">
            <div className="col-sm-12 text-center">
              <div className="cart-empty-title">
                <h1>Cart Empty !!</h1>
                <p className="return-to-shop">
                  <Link to="/" className="button wc-backward">
                    Browse our products &amp; fill the cart!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container">
            <h2 style={{ fontSize: "20px" }} className="mt-4">
              Shopping Cart
            </h2>
            <div className="wrap cf">
              <div className="cart">
                <ul className="cartWrap">
                  {cart.cartItems?.map((prod) => (
                    <li className="items odd">
                      <div className="infoWrap">
                        <div className="cartSection">
                          <img src={prod.image} alt className="itemImg" />

                          <h3>{prod.title}</h3>
                          <p>
                            <input
                              type="text"
                              className="qty"
                              placeholder={prod.quantity}
                            />{" "}
                            x {prod.price}
                          </p>
                          <p className="stockStatus"> In Stock</p>
                        </div>
                        <div className="prodTotal cartSection">
                          <p>${prod.price}</p>
                        </div>
                        <div className="cartSection removeWrap">
                          <span
                            onClick={() => handleRemoveFromCart(prod)}
                            className="remove"
                          >
                            x
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="subtotal cf">
                <ul>
                  <li className="totalRow">
                    <span className="label">Subtotal</span>
                    <span className="value">${cart.cartTotalAmount}</span>
                  </li>
                  <li className="totalRow">
                    <span className="label">Shipping</span>
                    <span className="value">$5.00</span>
                  </li>
                  <li className="totalRow">
                    <span className="label">Tax</span>
                    <span className="value">$4.00</span>
                  </li>
                  <li className="totalRow final">
                    <span className="label">Total</span>
                    <span className="value">${cart.cartTotalAmount}</span>
                  </li>
                  <li className="totalRow">
                    <a href="#" className="btn continue">
                      Checkout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clear-cart">
                <button
                  onClick={() => clearShoppingCart()}
                  className="btn-clear-cart"
                >
                  Clear Cart ?
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
