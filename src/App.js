import Main from "./components/Main"
import ProductList from "./components/ProductList"
import Orders from "./components/Orders"
import Cart from "./components/Cart"
import NoPage from "./components/NoPage"

import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch('products.json')
      const json = await data.json()
      await new Promise(r => setTimeout(r, 1000))
      setProducts(json)
    }
    getProducts()
      .catch(console.error);
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main products={products} />}>
          <Route index element={<ProductList products={products} />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}