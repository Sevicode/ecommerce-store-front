import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
