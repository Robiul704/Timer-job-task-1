import { useState } from "react";


const Drag = () => {


    const listsitem=[
        {id:'item1',label:'item 1'},
        {id:'item2',label:'item 2'},
        {id:'item3',label:'item 3'},
        {id:'item4',label:'item 4'},
        {id:'item5',label:'item 5'},
        {id:'item6',label:'item 6'},
        {id:'item7',label:'item 7'},
        {id:'item8',label:'item 8'},
    ]
    const [list,setlist]=useState(listsitem)
    const [isdraging,setisdraging]=useState(false)
    const [isdraging2,setisdraging2]=useState(false)
    const [dragglist,setdraglist]=useState([])
    const [dragglist2,setdraglist2]=useState([])
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
    //----------------------------------------------
    const targetclassname=`mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
        isdraging ? "border-black ": "border-indigo-300"}`
    const targetclassname2=`mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${
        isdraging2 ? "border-black ": "border-indigo-300"}`
    //----------------------------------------------

    const handledrop=(e)=>{
        e.preventDefault()
        const id=e.dataTransfer.getData("id")
        const item=list.find((x)=>x.id == id)
        if(item){
            setdraglist([...dragglist,item])
            setisdraging(false)
            const filterdlist=list.filter(x=>x.id !== id)
            setlist(filterdlist)
        }
    }
    const handledrop2=(e)=>{
        e.preventDefault()
        const id=e.dataTransfer.getData("id")
        const item=list.find((x)=>x.id == id)
        if(item){
            setdraglist2([...dragglist2,item])
            setisdraging2(false)
            const filterdlist=list.filter(x=>x.id !== id)
            setlist(filterdlist)
        }
    }
    //------------------------------------------------
    return (
        <div className="grid lg:grid-cols-3 gap-1 mb-10">
           <div className={targetclassname}>
            <h1>To Do</h1>
           <ul  className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
                {
                    list.map(item=>{
                        return(
                            <li key={item.id}  id={item.id} className="bg-white border border-indigo-300 p-4 mb-2 cursor-move" onDragStart={handledragstart} draggable={true}>
                                {item.label}
                                </li>
                        )
                    })
                }
            </ul>
           </div>
            <div onDragOver={handleover} onDrop={handledrop} className={targetclassname}>
                <h1>On Going</h1>
            <ul className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
            {
                dragglist.map(item=>{
                    return (
                        <li
                         className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                        key={item.id}
                        id={item.id}
                        draggable={true}
                        onDragStart={handledragstartONGOING}
                        >{item.label}</li>
                    )
                })
            }
            </ul>
            </div>
            <div onDragOver={handleove2} onDrop={handledrop2} className={targetclassname2}>
                <h1>Completed</h1>
            <ul className="list-none p-0 m-0  bg-indigo-200 border border-indigo-300 min-h-40">
            {
                dragglist2.map(item=>{
                    return (
                        <li className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                        key={item.id}
                        id={item.id}
                        draggable={true}
                        >{item.label}</li>
                    )
                })
            }
            </ul>
            </div>
        </div>
    );
};

export default Drag;