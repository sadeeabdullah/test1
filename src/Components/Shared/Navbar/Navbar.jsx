import { NavLink } from "react-router-dom";
import navLogo from "../../../assets/Logo/Untitled design.svg"

const Navbar = () =>{

  const user = true ;
    

  const navItems = <>
    <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#ff3131]  text-white btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Home
          </NavLink>
    <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#ff3131]  text-white  btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Products
          </NavLink>
          {
            user && <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'btn  bg-[#ff3131]  text-white btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Login/Register
          </NavLink>
          }
  </>

    return (
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} htmlFor="my-drawer-2"  className="drawer lg:drawer-open drawer-button   btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <div className="">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <img src={navLogo} alt="" />
      {navItems}
    </ul>
  
  </div>
</div>
        </div>
        <a className="btn btn-ghost text-xl">
        <img className="bg-transparent" src={navLogo} alt="" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </div>
    );
};

export default Navbar;