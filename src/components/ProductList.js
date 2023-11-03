export default function ProductList({products}) {

  function ProductListItem({product}) {
    return (
      <div className="w-[320px] flex flex-col bg-white hover:bg-gray-50 text-gray-700 rounded-xl p-8 shadow-lg hover:cursor-pointer">
        <div className='w-48 mx-auto'>
          <img src={product.image} className="w-full" alt='product'></img>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="text-lg">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
          <span className="ml-8 font-semibold">${product.price}</span>
        </div>
      </div>
    )
  }

  function ProductLoading() {
    return (
      <div className="shadow-lg rounded-xl p-8 pt-12 w-[320px] h-[441px] mx-auto bg-white">
        <div className="animate-pulse flex flex-col space-x-4">
          <div className="rounded-lg bg-slate-300 w-[180px] h-[230px] mx-auto mb-8"></div>
          <div className="flex h-24">
            <div className="flex flex-col w-3/5">
              <div className="h-4 bg-slate-300 rounded mb-4"></div>
              <div className="h-2 bg-slate-300 rounded mb-2"></div>
              <div className="h-2 bg-slate-300 rounded mb-2"></div>
              <div className="h-2 bg-slate-300 rounded"></div>
            </div>
            <div className="h-4 w-16 bg-slate-300 rounded ml-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-10 grid-auto-fill">
      { products.length === 0 ?  
        Array.from({length: 8}, (v, i) => <ProductLoading key={i}></ProductLoading>) :
        products.map( (product, idx) => { return <ProductListItem key={idx} product={product}></ProductListItem> } )
      }
    </div>
  )

}