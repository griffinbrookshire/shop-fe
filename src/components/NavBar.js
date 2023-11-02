export default function NavBar() {

  function Logo() {
    return (
      <div className="flex items-center">
        <img src="gear.png" alt="settings" className="w-12 h-12 hover:animate-spin"></img>
        <span className="ml-2 hidden min-[825px]:inline font-serif">Items 'R' Us</span>
      </div>
      
    )
  }

  function NavItem({text, link}) {
    return (
      <li>
        <a href={link} className="hover:text-gray-100">{text}</a>
      </li>
    )
  }

  function SearchBar() {
    return (
      <form className="flex items-center">
        <label>Search</label>
        <input type="text" className="ml-2 px-4 rounded-full border-gray-500 border text-gray-700 hover:bg-gray-100"></input>
      </form>
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