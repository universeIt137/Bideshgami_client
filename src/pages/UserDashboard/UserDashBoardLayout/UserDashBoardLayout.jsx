import { Outlet } from "react-router-dom";
import UserDashboardSidebar from "./UserDashboardSidebar";
import Container from "../../../shared/Container";

const UserDashBoardLayout = () => {
    return (
        <Container>
            <div className=" flex flex-col lg:flex-row gap-5  py-5">
                <UserDashboardSidebar />
                <Outlet />
            </div>
        </Container>
    );
};

export default UserDashBoardLayout;