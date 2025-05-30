import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Components/Share/Navber";
import Footer from "../Components/Share/Footer";

const Root = () => {
  return (
    <div>
      <Navber></Navber>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;
