export default function NavBar() {

  function Logo() {
    return (
      <div className="flex items-center">
        <img src="gear.png" alt="settings" className="w-12 h-12"></img>
        <span className="ml-2">Griff & Kal LLC</span>
      </div>
      
    )
  }

  function NavItem({text, link = '#'}) {
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
        <input type="text" className="ml-2 rounded-full b-2 border-gray-500 text-gray-700 px-2 hover:bg-gray-100"></input>
      </form>
    )
  }

  return (
    <nav className="flex justify-between fixed top-0 left-0 w-screen m-0 px-12 py-6 bg-blue-400 shadow-lg text-white text-lg">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <ul className="flex justify-center items-center space-x-8">
        <NavItem text={'Home'} link="/"></NavItem>
        <NavItem text={'Orders'} link="/"></NavItem>
        <NavItem text={'Cart'} link="/cart"></NavItem>
      </ul>
    </nav>
  )
}