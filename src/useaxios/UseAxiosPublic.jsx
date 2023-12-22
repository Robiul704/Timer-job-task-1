import axios from "axios";

const AxiosPublic=axios.create({
    baseURL:'https://brand-shop-webside-server.vercel.app/'
})
const UseAxiosPublic = () => {
    return AxiosPublic
};

export default UseAxiosPublic;