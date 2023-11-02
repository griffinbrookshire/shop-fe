import React, { useEffect, useState } from 'react';

export default function ProductList() {

  const [numItems, setNumItems] = useState(10)

  function ProductItem() {
    return (
      <div className="w-fit flex flex-col bg-white hover:bg-gray-50 text-gray-700 rounded-xl p-8 shadow-lg">
        <img src="shirt.png" className="w-48 mx-auto"></img>
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="text-lg">Super Sick T-Shirt</h1>
            <p className="text-sm text-gray-500">This t-shirt is totally wicked and looks super rad with a nice pair of loafers.</p>
          </div>
          <span className="ml-8 font-semibold">$35.00</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-10 grid-auto-fill">
      {Array.from({length: numItems}, (v, i) => <ProductItem key={i}></ProductItem>)}
    </div>
  )

}