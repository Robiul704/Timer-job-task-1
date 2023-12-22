import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseToDo = () => {
    const AxiosPublic=UseAxiosPublic()
    const {refetch,data:todo=[]}=useQuery({
        queryKey:['todo'],
        queryFn: async ()=>{
            const res=await AxiosPublic.get('/todo')
            return res.data
        }
    })
    console.log(todo)
    return [todo,refetch]
   
};

export default UseToDo;