import React, { useEffect, useState } from 'react';

export default function Orders() {

  function OrderDetails({orderTotal}) {

    const [expanded, setExpanded] = useState(false)

    function expandOrder() {
      setExpanded(!expanded)
    }

    function today() {
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      let today  = new Date();
      return today.toLocaleDateString("en-US", options)
    }
    
    function ItemDetails() {
      return (
        <div className='flex items-center'>
          <OrderItemImage itemQuantity="2"></OrderItemImage>
          {expanded &&
            <>
              <div className='flex flex-col ml-4 text-gray-400 text-sm'>
                <p className='text-black'>Super Sick T-Shirt</p>
                <p>Size: L</p>
                <p>Color: Black</p>
                <p>Material: Cotton</p>
              </div>
              <div className='flex flex-col mt-auto ml-12 leading-5 font-semibold'>
                <p>$12.99</p>
              </div>
            </>
          }
        </div>
      )
    }

    return (
      <div className={`relative w-full h-fit pt-6 ${expanded?'pb-11':'pb-6'} flex flex-col`}>
        <p className="font-bold">{today()}</p>
        <p className='mb-4'>${orderTotal}</p>
        <div className={`relative flex mt-auto pl-5 ${expanded?'flex-col space-y-4 top-5':'flex-row items-center space-x-7'}`}>
          <div className={`w-6 h-6 flex justify-center items-center cursor-pointer transition-transform duration-250 ${expanded?'rotate-90':''}`} onClick={expandOrder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" id="chevron"><path fill="none" stroke="#70a3f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 6-6-6-6"></path></svg>
          </div>
          <ItemDetails></ItemDetails>
          <ItemDetails></ItemDetails>
          <ItemDetails></ItemDetails>
        </div>
      </div>
    )
  }

  

  function OrderItemImage({itemQuantity}) {
    return (
      <div className="relative w-fit h-fit -ml-3">
        <img src="shirt.png" className="w-[50px] h-[70px] bg-gray-100 border border-gray-300 rounded-md"></img>
        {itemQuantity &&
          <span className="w-4 h-4 absolute -right-1 -bottom-1 flex justify-center items-center bg-gray-500 rounded-full text-white text-xs">{itemQuantity}</span>
        }
      </div>
    )
  }

  return (
    <div className="w-3/4 min-w-[350px] max-w-[1250px] mx-auto card">
      <h1 className="text-2xl mb-2 text-center">Your Orders</h1>
      <div className="grid grid-cols-1 divide-y">
        <OrderDetails orderTotal="49.99"></OrderDetails>
        <OrderDetails orderTotal="49.99"></OrderDetails>
        <OrderDetails orderTotal="49.99"></OrderDetails>
      </div>
    </div>
  )

}