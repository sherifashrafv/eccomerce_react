import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
export default function MasterLayout({ userData, logOut }) {
  return (
    <div>
      <Header userData={userData} logOut={logOut} />
      <Outlet />
      <Footer />
    </div>
  );
}
