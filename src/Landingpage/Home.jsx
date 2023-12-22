import CreateTask from "../Dashboard/CreateTask";
import Gallery from "../Navber/Gallery";
import Reviews from "../Navber/Reviews";
import Banner from "./Banner";
import Drag from "./Drag";
import DragCard from "./DragCard";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Testimonial></Testimonial>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;