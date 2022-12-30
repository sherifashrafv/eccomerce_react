import "./App.css";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import MasterLayout from "./components/masterLayout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/index.jsx";
import ContactUs from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Login from "./pages/Login/index.jsx";
import Product from "./pages/singleProduct/index.jsx";
import Faq from "./pages/faq/index";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Register from "./pages/register";

function App() {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodeToken = jwtDecode(encodedToken);
    setUserData(decodeToken);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);
  let LogOut = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to="/login" />;
  };
  const routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout logOut={LogOut} userData={userData} />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login saveUserData={saveUserData} />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/F.A.Q",
          element: <Faq />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
