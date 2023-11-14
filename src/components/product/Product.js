import SideImageList from "./SideImageList";

import { useEffect, useState } from "react"
import { useParams } from 'react-router';

export default function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetch('products.json')
      const json = await data.json()
      await new Promise(r => setTimeout(r, 1500))
      setProduct(json.find((product) => product.id == id))
    }
    getProduct()
      .catch(console.error);
  }, [])

  return (
    <>
      { product ?
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-center space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
          <div className='w-full sm:w-4/5 md:w-3/5 flex flex-col-reverse lg:flex-row card'>
            <div id="side-image-list" className='flex flex-row lg:flex-col w-fit space-x-1 lg:space-x-0 space-y-0 lg:space-y-1'>
              <SideImageList images={product.images}></SideImageList>
            </div>
            <img src={product.images[0]} className='w-3/4 lg:w-1/2 mx-auto' alt="product"></img>
          </div>
          <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/4 min-w-[350px] h-fit flex flex-col card'>
            <div className='flex w-full'> 
              <div className='flex flex-col'>
                <h1 className='text-2xl'>{product.name}</h1>
                <p className='text-sm text-gray-500'>Comfort Tee</p>
                <p className='w-3/5 mt-2 text-sm'>{product.description}</p>
              </div>
              <div className='ml-auto'>
                <p className='text-xl'>${product.price}</p>
              </div>
            </div>
            <button className='w-3/5 h-12 mt-8 mx-auto bg-blue-400 text-white text-center rounded-2xl'>Add to Cart</button>
          </div>
        </div>
        :
        <div className='animate-pulse w-11/12 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-center space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
          <div className='w-full sm:w-4/5 md:w-3/5 flex flex-col-reverse lg:flex-row card'> 
            <div className='flex flex-row lg:flex-col w-fit space-x-1 lg:space-x-0 space-y-0 lg:space-y-1'>
              <div className="w-12 h-16 bg-slate-300 rounded"></div>
              <div className="w-12 h-16 bg-slate-300 rounded"></div>
            </div>
            <div className="rounded-lg bg-slate-300 w-3/4 lg:w-1/2 mx-auto mt-6 mb-8 aspect-[4/5]"></div>
          </div>
          <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/4 min-w-[350px] h-fit flex flex-col card'>
            <div className='flex w-full'> 
              <div className='w-1/2 flex flex-col'>
                <div className="w-full h-6 bg-slate-300 rounded mb-2"></div>
                <div className="w-1/2 h-3 bg-slate-300 rounded mb-2"></div>
                <div className="w-4/5 h-3 bg-slate-300 rounded my-2"></div>
                <div className="w-4/5 h-3 bg-slate-300 rounded mb-2"></div>
                <div className="w-4/5 h-3 bg-slate-300 rounded mb-2"></div>
              </div>
              <div className='ml-auto'>
                <div className="w-24 h-6 bg-slate-300 rounded mb-2"></div>
              </div>
            </div>
            <div className="w-3/5 h-12 mt-4 mx-auto bg-slate-300 rounded-2xl"></div>
          </div>
        </div>
      }
    </>
  )

}