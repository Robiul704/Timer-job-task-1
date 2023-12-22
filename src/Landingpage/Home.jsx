import CreateTask from "../Dashboard/CreateTask";
import Banner from "./Banner";
import Drag from "./Drag";
import DragCard from "./DragCard";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;