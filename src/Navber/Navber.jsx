
import { NavLink } from "react-router-dom";

const Navber = () => {
 
    const links=<>
    <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  }>Home</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/features'}>Features</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/members'}>Members</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/blog'}>Blog</NavLink>
    </>
    return (
        <div className="fixed container mx-auto z-50">
            <div className="navbar bg-slate-100 border-b-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
       {links}
      </ul>
    </div>
    <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/2812v0W/png-clipart-sharepoint-for-project-management-others-miscellaneous-logo.png" alt="" /> <span className="text-BLACK font-bold ml-2">TIMERS</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline px-10 hover:bg-blue-800">Login</button>
  </div>
</div>
        </div>
    );
};

export default Navber;