import { useState } from "react"

export default function NavBar({products}) {

  function Logo() {
    return (
      <a href="/" className="flex items-center cursor-pointer group">
        <img src="gear.png" alt="settings" className="w-12 h-12 group-hover:animate-spin"></img>
        <span className="ml-2 hidden min-[825px]:inline font-serif">Items 'R' Us</span>
      </a>
    )
  }

  function NavItem({text, link}) {
    return (
      <li>
        <a href={link} className="hover:underline">{text}</a>
      </li>
    )
  }

  function SearchBar() {

    const [isLoading, setIsLoading] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [searchResults, setSearchResults] = useState([])
  
    async function search(event) {
      let value = event.target.value
      if (value.length < 3) {
        setShowResults(false)
        setSearchResults([])
        return
      }
      setIsLoading(true)
      await new Promise(r => setTimeout(r, 1500))
      let filteredItems = products.filter( (item) => item.name.toLowerCase().includes(value.toLowerCase()) )
      setSearchResults(filteredItems)
      setIsLoading(false)
      if (filteredItems.length > 0)
        setShowResults(true)
    }

    function SearchResult({result}) {
      return (
        <div className="flex items-center px-2 space-x-2 hover:bg-gray-200 hover:cursor-pointer">
          <div className="w-8">
            <img src={result.image} className="w-8" alt="result"></img>
          </div>
          <span>{result.name}</span>
        </div>
      )
    }

    return (
      <div className="relative flex flex-col justify-center">
        <div className="flex items-center">
          <label>Search</label>
          <input type="text" onChange={search} className="ml-2 px-4 rounded-full border-gray-500 border text-gray-700 hover:bg-gray-100"></input>
          { isLoading &&
          <div className="absolute right-2 w-5 h-5 animate-spin">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#70a3f3" d="M50.79 32A18.79 18.79 0 1 1 32 13.21a2 2 0 0 1 0 4A14.79 14.79 0 1 0 46.79 32a2 2 0 1 1 4 0Z" className="color222222 svgShape" data-name="Loading"/></svg> */}
            <img src="gear.png" alt="gear"></img>
          </div>}
        </div>
        { showResults &&
        <div className="absolute left-[72px] top-10 flex flex-col w-[238px] bg-white border border-blue-400 text-gray-700 divide-y-2">
          { searchResults.map( (result, idx) => { return <SearchResult key={idx} result={result}></SearchResult> } ) }
        </div>}
      </div>
    )

  }

  return (
    <nav className="flex justify-between fixed top-0 left-0 z-10 w-screen m-0 px-12 py-6 bg-blue-400 shadow-lg text-white text-lg">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <ul className="flex flex-col min-[700px]:flex-row justify-center items-center space-x-0 min-[700px]:space-x-8">
        <NavItem text={'Home'} link="/"></NavItem>
        <NavItem text={'Orders'} link="/orders"></NavItem>
        <NavItem text={'Cart'} link="/cart"></NavItem>
      </ul>
    </nav>
  )

}