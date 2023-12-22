import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Footer from "../Landingpage/Footer";


const RootDashboard = () => {
    return (
        <div className="flex container mx-auto">
<div className="w-64 min-h-full">
<Dashboard></Dashboard>
</div>
<div className="flex-1 ml-8">
    <Outlet></Outlet>
</div>
        </div>
    );
};

export default RootDashboard;