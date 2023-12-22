
import { useContext } from "react";
import { Form, Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthPovider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const {
        googlelogin,
        githublogin,
        Login}=useContext(AuthContext)

        
        const handlelogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        Login(email,password)
        .then(res=>{
            navigate(location.state? location.state : '/')
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            console.log(res)
        })
        .catch(err=>console.log(err))
          }

          const handlegoogle=()=>{
            googlelogin()
            .then(result=>{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location.state? location.state : '/')
                console.log(result)
            })
        
          }
          const handlegithub=()=>{
        
            githublogin()
            .then(result=>{
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
              navigate(location.state? location.state : '/')
                console.log(result)
            })
        }

    return (
        <div>
            <div className="pt-20 bg-orange-100 text-center">
         <div className="grid items-center gap-10  justify-center lg:grid-cols-2 md:grid-cols-2">
            <div className="w-full">
 <div className="mx-auto">
        <img 
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image" />
      </div>
        </div>
        <div className="mx-auto rounded-xl  bg-gradient-to-r from-fuchsia-400 to-violet-700">
            <div className="relative  flex flex-col text-gray-700   shadow-md w-96 rounded-xl bg-clip-border">
  <div
    className="relative grid mx-4 mb-4 mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-r from-orange-400 to-cyan-400-700 bg-clip-border  shadow-gray-900/20">
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
    <img className="h-10 w-10 ml-5 rounded-full" src="https://i.ibb.co/2812v0W/png-clipart-sharepoint-for-project-management-others-miscellaneous-logo.png" alt="" />
      Sign In
    </h3>
  </div>
  <Form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
       <span > have not an Account please <span className="text-blue underline"><Link to='/resister'>Resister</Link></span></span>
       <div className="flex gap-5 text-black justify-center items-center">
     <button onClick={handlegoogle} className="text-4xl "  ><FaGoogle /></button>
       <button className="text-4xl "  onClick={handlegithub}><FaGithub /></button>
     </div>
        </div>
      </Form>
  <p className="flex text-white  justify-center mt-6 font-sans text-sm antialiased font-light leading-normal">
      Don't have an account?
    <NavLink to={'/Resister'}>Sign Up</NavLink>
    </p>
</div>
        </div>
        </div>
       </div>
        </div>
    );
};

export default Login;