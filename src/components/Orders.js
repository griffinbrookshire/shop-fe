import React, { useEffect, useState } from 'react';

export default function Orders() {

  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(() => {

    const getOrders = async () => {
      const data = await fetch('orders.json');
      const json = await data.json();
      await new Promise(r => setTimeout(r, 1000));
      setOrders(json);
      setIsLoading(false)
    }
  
    getOrders()
      .catch(console.error);
  }, [])

  function OrderDetails({order}) {

    const [expanded, setExpanded] = useState(false)

    function expandOrder() {
      setExpanded(!expanded)
    }
    
    function ItemDetails({item}) {

      function OrderItemImage() {
        return (
          <div className="relative w-fit h-fit -ml-3">
            <img src="shirt.png" className="w-[50px] h-[70px] bg-gray-100 border border-gray-300 rounded-md" alt='product'></img>
            {item.quantity && item.quantity > 1 &&
              <span className="w-4 h-4 absolute -right-1 -bottom-1 flex justify-center items-center bg-gray-500 rounded-full text-white text-xs">{item.quantity}</span>
            }
          </div>
        )
      }

      return (
        <div className='flex items-center'>
          <OrderItemImage></OrderItemImage>
          {expanded &&
            <>
              <div className='flex flex-col ml-4 text-gray-400 text-sm'>
                <p className='text-black'>{item.name}</p>
                { Object.entries(item.options).map( ([key, value], idx) => <p key={idx}>{key}: {value}</p>) }
              </div>
              <div className='flex flex-col mt-auto ml-12 leading-5'>
                <p>${item.price} {item.quantity > 1 && <span>each</span>}</p>
              </div>
            </>
          }
        </div>
      )
    }

    return (
      <div className={`relative w-full h-fit pt-6 ${expanded?'pb-11':'pb-6'} flex flex-col`}>
        <p className="font-bold">{order.orderTimestamp}</p>
        <p className='mb-4'>${order.orderPrice}</p>
        <div className={`relative flex mt-auto pl-5 ${expanded?'flex-col space-y-4 top-5':'flex-row items-center space-x-7'}`}>
          <div className={`w-6 h-6 flex justify-center items-center cursor-pointer transition-transform duration-250 ${expanded?'rotate-90':''}`} onClick={expandOrder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" id="chevron"><path fill="none" stroke="#70a3f3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 6-6-6-6"></path></svg>
          </div>
          { order.items.map( (item, idx) => { return <ItemDetails key={idx} item={item}></ItemDetails> } ) }
        </div>
      </div>
    )
  }

  function OrderDetailsLoading() {
    return (
      <div className="animate-pulse relative w-full h-fit pt-6 pb-6 flex flex-col">
        <div className="w-40 h-4 bg-slate-300 rounded mb-4"></div>
        <div className="w-16 h-4 bg-slate-300 rounded mb-6"></div>
        <div className="relative flex mt-auto pl-5 flex-row items-center space-x-4">
          <div className="w-6 h-6 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" id="chevron"><path fill="none" stroke="rgb(203 213 225)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 6-6-6-6"></path></svg>
          </div>
          <div className="w-[50px] h-[70px] bg-slate-300 rounded"></div>
          <div className="w-[50px] h-[70px] bg-slate-300 rounded"></div>
          <div className="w-[50px] h-[70px] bg-slate-300 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-3/4 min-w-[350px] max-w-[1250px] mx-auto card">
      <h1 className="text-2xl mb-2 text-center">My Orders</h1>
      <div className="grid grid-cols-1 divide-y">
        { isLoading ?
          Array.from({length: 3}, (v, i) => <OrderDetailsLoading key={i}></OrderDetailsLoading>) :
          orders.map( (order, idx) => { return <OrderDetails key={idx} order={order}></OrderDetails> } )
        }
      </div>
    </div>
  )

}