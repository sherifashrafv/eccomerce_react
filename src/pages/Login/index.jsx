import React, { useState } from "react";
import "./index.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
export default function LogIn({ saveUserData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [errorMessage, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const forgetPassword = () => {
    alert("هههه اعمل اكونت جديد يامعلم");
  };
  const getInputValue = (e) => {
    e.preventDefault();
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let validateFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    console.log(validationResponse);
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://api.storerestapi.com/auth/login",
        user
      );
      const result = data.data;
      if (data.message == "Sign in success") {
        localStorage.setItem("token", result.access_token);
        navigate("/");
        saveUserData();
      } else {
        setError(data.message);
      }
    }
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div class="page-heading ">
          <div class="col">
            <h1>
              My account
              <small>Manage your account and see your orders</small>
            </h1>
          </div>
        </div>
        <div className="bordered-block">
          <h2>Login</h2>
          {errorList.map((error, index) => (
            <p key={index} className="alert alert-danger">
              {error.message}
            </p>
          ))}
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <input
              type="text"
              className="woocommerce-Input woocommerce-Input--text input-text"
              placeholder="email address *"
              name="email"
              onChange={getInputValue}
              autoComplete="email"
            />
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <span className="password-input">
              <input
                className="woocommerce-Input woocommerce-Input--text input-text"
                placeholder="Password *"
                type="password"
                name="password"
                onChange={getInputValue}
                id="password"
                autoComplete="current-password"
              />
              <span className="show-password-input" />
            </span>
          </p>
          <p className="form-row d-flex flex-row align-items-center">
            <button
              onClick={submitFormData}
              className="woocommerce-button button woocommerce-form-login__submit wp-element-button"
              name="login"
              value="Log in"
            >
              Log in
            </button>
            <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
              <input
                className="woocommerce-form__input woocommerce-form__input-checkbox"
                name="rememberme"
                type="checkbox"
                id="rememberme"
                defaultValue="forever"
              />{" "}
              <span>Remember me</span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}
