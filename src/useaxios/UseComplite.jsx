import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseComplite = () => {
    const AxiosPublic=UseAxiosPublic()
    const {refetch, data:complite=[]}=useQuery({
        queryKey:['complite'],
        queryFn: async ()=>{
            const res=await AxiosPublic.get('/complite')
            return res.data
        }
    })
    console.log(complite)
    return [complite,refetch]
};

export default UseComplite;