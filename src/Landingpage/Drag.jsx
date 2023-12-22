import { useEffect, useState } from "react";
import UseToDo from "../useaxios/UseToDo";
import UseOnGoing from "../useaxios/UseOnGoing";
import UseComplite from "../useaxios/UseComplite";
import UseAxiosPublic from "../useaxios/UseAxiosPublic";
import { RiDeleteBack2Line, RiDeleteBin5Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import Aos from "aos";
import 'aos/dist/aos.css'
const Drag = () => {

    const [todo,refetch]=UseToDo()
    const [ongoing]=UseOnGoing()
    const [complite]=UseComplite()
    console.log(todo,ongoing,complite)
    const AxiosPublic=UseAxiosPublic()


    // const listsitem=[
    //     {id:'1',label:'item 1'},
    //     {id:'2',label:'item 2'},
    //     {id:'3',label:'item 3'},
    //     {id:'4',label:'item 4'},
    //     {id:'5',label:'item 5'},
    //     {id:'6',label:'item 6'},
    //     {id:'7',label:'item 7'},
    //     {id:'8',label:'item 8'},
    // ]
    const [isdraging,setisdraging]=useState(false)
    const [isdraging2,setisdraging2]=useState(false)
//---------------------------------------------------
    const handleover=(e)=>{
        e.preventDefault()
        setisdraging(true)
    }
    const handleove2=(e)=>{
        e.preventDefault()
        setisdraging2(true)
    }
    //----------------------------------------------

    const handledragstart=(e)=>{
        e.dataTransfer.setData("id",e.currentTarget.id)
    }
    const handledragstartONGOING=(e)=>{
        e.dataTransfer.setData("id",e.currentTarget.id)
    }
    const handledragstartCOMPLITE=(e)=>{
        e.dataTransfer.setData("id",e.currentTarget.id)
    }
    //----------------------------------------------
    const targetclassname=`mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
        isdraging ? "border-black ": "border-indigo-300"}`
    const targetclassname2=`mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
        isdraging2 ? "border-black ": "border-indigo-300"}`
    //----------------------------------------------

    const handledrop=(e)=>{
        e.preventDefault()
        const id=e.dataTransfer.getData("id")
        console.log(id)
        const item=todo.find((x)=>x._id == id)
        const title=item.title
        const deadline=item.deadline
        const priority=item.priority
        const description=item.description
        const data={title,deadline,priority,description}
        //--------------------------------------------------
        AxiosPublic.post('/ongoing',data)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
        
        AxiosPublic.delete(`todo/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
        AxiosPublic.delete(`complite/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
        console.log(item.title)
    }
    const handledrop2=(e)=>{
        e.preventDefault()
        const id=e.dataTransfer.getData("id")
        const item=todo.find((x)=>x._id == id)
        const title=item.title
        const deadline=item.deadline
        const priority=item.priority
        const description=item.description
        const data={title,deadline,priority,description}
        AxiosPublic.post('/complite',data)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
        AxiosPublic.delete(`todo/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
        AxiosPublic.delete(`ongoing/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
    }
    //------------------------------------------------


    const handledelete1=(id)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.delete(`todo/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
       
    }
    const handledelete2=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.delete(`ongoing/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
       
    }
    const handledelete3=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.delete(`complite/${id}`)
        .then(res=>{
            refetch()
            console.log(res.data)
        })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
       
    }

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
        <div className="grid md:grid-cols-2 mt-20 lg:grid-cols-3 gap-1 mb-10">
           <div className={targetclassname}>
            <h1 className="text-3xl font-bold text-center mb-4">To-Do</h1>
           <ul  className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
                {
                    todo.map(item=>{
                        return(
                            <li key={item._id} data-aos="flip-up"  id={item._id} className="bg-white border border-indigo-300 p-2 mb-2 cursor-move" onDragStart={handledragstart} draggable={true}>
                                
                                <article 
                    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                  >
                     <div className="text-center text-2xl">
                            <button onClick={()=>handledelete1(item._id)}><RiDeleteBin5Line /></button>
                    </div>
                    <div className="rounded-[10px] bg-white   sm:p-6">
                  
                  <a href="#">
                    <h3 className=" text-lg font-medium text-gray-900">
                     {item.title} 
                    </h3>
                  <div className="grid gap-2 lg:grid-cols-2 ">
                  <span
                      className="whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600"
                    >
                      Deadline {item.deadline} days
                    </span>
              
                    <span
                      className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                    >
                      Priority {item.priority}
                    </span>
                  </div>
                  </a>
                  <p>{item.description}</p>
                </div>
                   

                  </article>
                                </li>
                        )
                    })
                }
            </ul>
           </div>
            <div onDragOver={handleover} onDrop={handledrop} className={targetclassname}>
                <h1 className="text-3xl font-bold text-center mb-4">On-Going</h1>
            <ul className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
            {
                ongoing.map(item=>{
                    return (
                        <li data-aos="flip-up"
                         className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                        key={item.id}
                        id={item.id}
                        draggable={true}
                        onDragStart={handledragstartONGOING}
                        >
                            <article 
                    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                  >
                    <div className="text-center text-2xl">
                            <button onClick={()=>handledelete2(item._id)}><RiDeleteBin5Line /></button>
                    </div>
                    <div className="rounded-[10px] bg-white   sm:p-6">
                  
                      <a href="#">
                        <h3 className=" text-lg font-medium text-gray-900">
                         {item.title} 
                        </h3>
                        <div className="grid gap-2 lg:grid-cols-2 ">
                      <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600"
                        >
                          Deadline {item.deadline} days
                        </span>
                  
                        <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                          Priority {item.priority}
                        </span>
                      </div>
                      </a>
                      <p>{item.description}</p>
                    </div>
                  </article>
                        </li>
                    )
                })
            }
            </ul>
            </div>
            <div onDragOver={handleove2}  onDrop={handledrop2} className={targetclassname2}>
                <h1 className="text-3xl font-bold text-center mb-4" >Completed</h1>
            <ul className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
            {
                complite.map(item=>{
                    return (
                        <li data-aos="flip-up" className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                        key={item._id}
                        id={item._id}
                        draggable={true}
                        onDragStart={handledragstartCOMPLITE}
                        ><article 
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                      >
                        <div className="text-center text-2xl">
                            <button onClick={()=>handledelete3(item._id)}><RiDeleteBin5Line /></button>
                    </div>
                        <div className="rounded-[10px] bg-white   sm:p-6">
                      
                          <a href="#">
                            <h3 className=" text-lg font-medium text-gray-900">
                             {item.title} 
                            </h3>
                            <div className="grid gap-2 lg:grid-cols-2 ">
                      <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600"
                        >
                          Deadline {item.deadline} days
                        </span>
                  
                        <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                          Priority {item.priority}
                        </span>
                      </div>
                          </a>
                          <p>{item.description}</p>
                        </div>
                      </article></li>
                    )
                })
            }
            </ul>
            </div>
        </div>
    );
};

export default Drag;