import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
