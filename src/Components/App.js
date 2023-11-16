import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
}
