import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseOnGoing = () => {
    const AxiosPublic=UseAxiosPublic()
    const {refetch,data:ongoing=[]}=useQuery({
        queryKey:['ongoing'],
        queryFn: async ()=>{
            const res=await AxiosPublic.get('/ongoing')
            return res.data
        }
    })
    console.log(ongoing)
    return [ongoing]
};

export default UseOnGoing;