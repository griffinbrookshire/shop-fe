import SearchBar from "./SearchBar"

export default function NavBar({products}) {

  function Logo() {
    return (
      <a href="/" className="flex items-center cursor-pointer group">
        <img src="gear.png" className="w-12 h-12 group-hover:animate-spin" alt="gear"></img>
        <span className="ml-2 hidden sm:inline font-serif">Items 'R' Us</span>
      </a>
    )
  }

  function NavItems() {

    function NavItem({text, link}) {
      return (
        <li>
          <a href={link} className="hover:underline">{text}</a>
        </li>
      )
    }

    return (
      <ul id="nav-items" className="absolute right-0 top-16 md:static hidden md:flex md:flex-row justify-center items-center space-x-0 md:space-x-8 text-center md:text-left bg-blue-400 w-32 md:w-[200px] shadow-lg md:shadow-none pb-2 md:pb-0 rounded-b-lg">
        <NavItem text={'Home'} link="/"></NavItem>
        <NavItem text={'Orders'} link="/orders"></NavItem>
        <NavItem text={'Cart'} link="/cart"></NavItem>
      </ul>
    )
  }

  function HamburgerMenu() {

    function handleExpandHamburger() {
      document.getElementById('hamburger').classList.toggle('change')
      document.getElementById('nav-items').classList.toggle('hidden')
    }

    return (
      <div id="hamburger" className="w-fit ml-4 md:hidden hover:cursor-pointer" onClick={handleExpandHamburger}>
        <div className="bar1 rounded"></div>
        <div className="bar2 rounded"></div>
        <div className="bar3 rounded"></div>
      </div>
    )

  }

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 z-10 w-screen m-0 px-4 md:px-10 py-3 bg-blue-400 shadow-lg text-white text-lg">
      <Logo></Logo>
      <SearchBar products={products}></SearchBar>
      <NavItems></NavItems>
      {/* <div id="hamburger" className="w-8 h-8 flex md:hidden hover:cursor-pointer" onClick={handleExpandHamburger}>
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 128 128" viewBox="0 0 128 128"><path fill="#fff" d="M108,36H20c-2.2,0-4-1.8-4-4s1.8-4,4-4h88c2.2,0,4,1.8,4,4S110.2,36,108,36z M112,64c0-2.2-1.8-4-4-4H20
    c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4h88C110.2,68,112,66.2,112,64z M112,96c0-2.2-1.8-4-4-4H20c-2.2,0-4,1.8-4,4s1.8,4,4,4h88
    C110.2,100,112,98.2,112,96z" className="color000000 svgShape"/></svg>
      </div> */}
      <HamburgerMenu></HamburgerMenu>
    </nav>
  )

}