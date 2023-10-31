import Main from "./components/Main"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import NoPage from "./components/NoPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}