
import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthPovider";

const Navber = () => {
    const {user,Logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()

    const handlelogout=()=>{
      Logout()
     .then(result=>{
        console.log(result)
        navigate(location.state? location.state : '/')
     })
     .catch(err=>{
        console.log(err)
     })
    }

    const links=<>
    <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  }>Home</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/gallery'}>Gallery</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/review'}>Reviews</NavLink>
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-700 font-bold py-1 px-3 mr-3" : " mr-3 hover:hover:text-red-700 font-bold py-1 px-3"
  } to={'/blog'}>Blog</NavLink>
    </>
    return (
        <div className="fixed container   mx-auto z-50">
            <div className="navbar bg-blue-200 border-b-4">
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
    {
        user && <p>{user.displayName}</p>
    }
    {
        user && <img className="h-12 w-12 rounded-full mr-5 ml-3" src={user.photoURL}></img>
    }
    {
        user?  <button onClick={handlelogout} className="btn btn-outline px-10 hover:bg-blue-800">LogOut</button>: <Link to={'/login'}><button className="btn btn-outline px-10 hover:bg-blue-800">Login</button></Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navber;