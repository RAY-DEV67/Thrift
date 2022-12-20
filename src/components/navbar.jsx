import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import ham from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import $ from "jquery";

export function Navbar() {

function handleOpenNav(){
    $(".nav").fadeIn()
}

function handleCloseNav(){
    $(".nav").fadeOut()
}

    return ( <div className="flex flex-col items-center sm:items-end">
        <div className="flex justify-between items-center w-11/12 pb-4 mt-0 md:mt-8 relative">
           <img src={logo} alt="logo" className="pt-4 md:pt-0"/>
            <div className="navBar pt-6 pb-6 hidden flex sm:block lg:pl-24 sm:pl-4  sm:pr-4 lg:pr-8">
               <div className="flex">
               <span className="hidden lg:block mr-2">00</span><NavLink to="/" className="flex pb-4 trans mr-8" activeClassName="active">Home</NavLink>
               <span className="hidden lg:block mr-2">01</span><NavLink to="/Destination" className="mr-8 flex trans" activeClassName="active">Destination</NavLink>
               <span className="hidden lg:block mr-2">02</span><NavLink to="/Crew" className="mr-8 flex trans" activeClassName="active">Crew</NavLink>
               <span className="hidden lg:block mr-2">03</span><NavLink to="/Technology" className="flex sm:mr-4 lg:mr-32 trans" activeClassName="active">Technology</NavLink>
               </div>
            </div>
            <img src={ham} alt="ham" className="sm:hidden ham" onClick={handleOpenNav}/>
            <div className="line bg-red-400 absolute hidden xl:block top-8 left-24"></div>
        </div>
        <div className="flex flex-col items-center py-8 fixed nav hidden w-full h-full bg-[url('./assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center">
      <div className="flex flex-col w-10/12 bg-no-repeat p-4 rounded-md  bg-cover lg:contain bg-[url('./assets/crew/background-crew-mobile.jpg')] items-center">
          <div className="flex w-full items-center  justify-between">
            <img src={logo} alt="ham" className="" />
            <img src={close} alt="close"  className ="cursor-pointer" onClick={handleCloseNav}/>
          </div>
          <NavLink to="/"  className="mt-8 uppercase p-4 w-10/12 features">home</NavLink>
          <NavLink to="/Destination" className="uppercase px-6 py-4 w-10/12 pricing">Destination</NavLink>
          <NavLink to="/Crew" className="uppercase px-6 py-4 w-10/12 contact">Crew</NavLink>
          <NavLink to="/Technology" className="uppercase px-6 py-4 w-10/12 contact">Technology</NavLink>
        </div>
      </div>
      </div>
    </div> );
}


