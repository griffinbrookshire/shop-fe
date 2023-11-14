import { useState } from "react"

export default function SearchBar({products}) {

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
      <a href={`/${result.id}`} className="flex items-center px-2 space-x-2 hover:bg-gray-200 hover:cursor-pointer">
        <div className="w-8">
          <img src={result.images[0]} className="w-8" alt="result"></img>
        </div>
        <span>{result.name}</span>
      </a>
    )
  }

  return (
    <div className="w-36 sm:w-72 relative flex justify-center">
      <div className="flex justify-center items-center">
        <input type="text" onChange={search} className="w-full px-4 rounded-full border-gray-500 border text-gray-700 hover:bg-gray-100" placeholder="Search"></input>
        { isLoading &&
        <div className="absolute right-6 w-5 h-5 animate-spin">
          <img src="gear.png" alt="gear"></img>
        </div> }
      </div>
      { showResults &&
      <div className="absolute left-[26px] top-8 flex flex-col w-[238px] bg-white border border-blue-400 text-gray-700 divide-y-2">
        { searchResults.map( (result, idx) => { return <SearchResult key={idx} result={result}></SearchResult> } ) }
      </div>}
    </div>
  )

}