import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

export default function Main({products}) {

  return (
    <div className="pt-32 pb-8">
      <NavBar products={products}></NavBar>
      <Outlet/>
    </div>
  )

}