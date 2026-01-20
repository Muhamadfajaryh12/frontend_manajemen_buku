import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-screen ">
      <Toaster position="top-right" />
      <div className="max-w-xl mx-auto mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
