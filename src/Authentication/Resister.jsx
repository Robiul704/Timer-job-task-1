import { useForm } from "react-hook-form";
import UseAxiosPublic from "../useaxios/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "./AuthPovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
const image_hosting_key='6fbc3358bbb1a92b78e2dee0f5ca1b94'
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Resister = () => {
    const location=useLocation()
    const navigate=useNavigate()
  
  const {register,handleSubmit,formState: { errors }, } = useForm();
  const { CreateUser,UpdateProfile,googlelogin,githublogin}=useContext(AuthContext)
  const AxiosPublic=UseAxiosPublic()
 
const onSubmit=async (data)=>{
const image={image:data.image[0]}
const res=await AxiosPublic.post(image_hosting_api,image,{
    headers:{
      'content-type':'multipart/form-data'
    }
  })
const name=data.name
const email=data.email
const password=data.password
const photoURL=res.data.data.display_url
console.log(name,email,password,photoURL)

CreateUser(email,password)
.then(result=>{
    navigate(location.state? location.state : '/')
    console.log(result)
    UpdateProfile(name,photoURL)
    .then(res=>{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Resister Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        console.log(res)
    })
})
.catch(err=>{
    console.log(err)
})
}
         const handlegoogle=()=>{
      googlelogin()
      .then(result=>{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Resister Successfully",
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
                title: "Resister Successfully",
                showConfirmButton: false,
                timer: 1500
              });
          navigate(location.state? location.state : '/')
            console.log(result)
        })
    }

  
    return (
        <div className="py-20 text-center">
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
    <img className="h-10 w-10 ml-5 rounded-full" src="https://i.ibb.co/NYhcbvc/398422372-720471996649390-8986746529219391044-n.jpg" alt="" />
      Sign Up
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name',{ required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-900"> name is required</span>}
        </div>
        
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email',{ required: true })} type="email" name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-900"> email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          {/* //pattern: /[A-Z]+[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+[a-zA-Z-/]/, */}
          <input {...register('password',{ required: true,maxLength: 20,minLength:6})} type="password" name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type==='required' && <span className="text-red-900"> password is required</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-900"> max 20 carecter</span>}
          {errors.password?.type==='minLength' && <span className="text-red-900"> min 6 carecter</span>}
          {/* {errors.password?.type==='pattern' && <span className="text-red-900">must be special carecter</span>} */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input {...register('image',{ required: true })}  type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
          {errors.image && <span className="text-red-900"> image is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
       <span > You have an Account please <span className="text-blue underline"><Link to='/login'>Login</Link></span></span>
     <div className="flex gap-5 text-yellow justify-center items-center">
     <button onClick={handlegoogle} className="text-4xl "  ><FaGoogle /></button>
       <button className="text-4xl "  onClick={handlegithub}><FaGithub /></button>
     </div>
       
        </div>
      </form>
    <div className="-ml-2.5">
    
    </div>
  </div>
</div>
        </div>
        </div>
       </div>
    );
};

export default Resister;