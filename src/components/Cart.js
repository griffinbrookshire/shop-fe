import { useEffect, useState } from "react"

export default function Cart() {

  const totalPrice = 49.99
  const shippingPrice = 8.99
  const taxPrice = 4.99
  const [orderTotal, setOrderTotal] = useState(Math.ceil((totalPrice + shippingPrice + taxPrice) * 100) / 100)

  function CartItem() {

    const itemName = "Super Sick T-Shirt"
    const itemPrice = 19.99
    const quantity = 1
    const [itemTotal, setItemTotal] = useState(itemPrice*quantity)

    function calcPrice(event) {
      let quantity = event.target.value
      setItemTotal(Math.ceil(itemPrice*quantity * 100) / 100)
      setOrderTotal(Math.ceil((totalPrice + shippingPrice + taxPrice) * 100) / 100)
    }

    return (
      <div className="flex py-8">
        <img src="shirt.png" className="w-[100px] h-[140px] mr-4 bg-gray-100 border border-gray-300 rounded-md"></img>
        <div className="flex flex-col h-full text-left">
          <p>{itemName}</p>
          <div className="text-gray-400 mt-auto">
            <p>Size: L</p>
            <p>Color: Black</p>
            <p>Material: Cotton</p>
          </div>
        </div>
        <div className="flex flex-col h-full ml-auto items-end justify-between">
          <div className="h-8">
            <img src="trash.png" className="w-[16px] h-[16px] cursor-pointer"></img>
          </div>
          <div className="h-8">
            <input type="number" defaultValue={quantity} min={1} className="w-12 h-8 pl-2 pr-1 border-gray-300 border rounded-lg" onChange={calcPrice}></input>
          </div>
          <div className="flex items-end h-8 space-x-2">
              <span>Total:</span><span>${itemTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }

  function SummaryLineItem({title, value}) {
    return (
      <div className="flex justify-between py-1">
        <span>{title}:</span>
        <span>${value.toFixed(2)}</span>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col min-[1000px]:flex-row max-[1000px]:items-center min-[1000px]:justify-center space-x-0 min-[1000px]:space-x-8 space-y-8 min-[1000px]:space-y-0">
      <div className="w-4/5 min-w-[350px] max-w-[750px] text-center card">
        <h1 className="text-2xl mb-2">My Cart</h1>
        <div className="grid grid-cols-1 divide-y">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
      </div>
      <div className="w-1/4 min-w-[350px] max-w-[750px] h-fit flex flex-col text-center card">
        <h1 className="text-2xl mb-2">Summary</h1>
        <div className="px-12">
          <SummaryLineItem title="Subtotal" value={totalPrice}></SummaryLineItem>
          <SummaryLineItem title="Shipping" value={shippingPrice}></SummaryLineItem>
          <SummaryLineItem title="Tax" value={taxPrice}></SummaryLineItem>
          <div className="flex justify-between py-2 font-bold">
            <span>Order Total:</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-40 h-10 mt-8 mx-auto bg-blue-400 text-lg text-white rounded-xl">Checkout</button>
      </div>
    </div>
  )

}