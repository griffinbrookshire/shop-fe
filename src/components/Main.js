import NavBar from "./nav/NavBar";

import { Outlet } from "react-router-dom";

export default function Main({products}) {

  return (
    <div className="pt-[104px] pb-8">
      <NavBar products={products}></NavBar>
      <Outlet/>
    </div>
  )

}