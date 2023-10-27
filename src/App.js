import ProductList from "./components/ProductList"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div className="bg-gray-200 h-full">
      <NavBar></NavBar>
      <ProductList></ProductList>
    </div>
  )
}