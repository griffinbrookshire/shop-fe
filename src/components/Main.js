import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

export default function Main() {

  return (
    <div className="pt-32">
      <NavBar></NavBar>
      <Outlet/>
    </div>
  )

}