import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '33px 0px 0px 100px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;