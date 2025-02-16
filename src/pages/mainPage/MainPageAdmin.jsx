import { Outlet } from "react-router-dom";
import Header from "../../admin/headerNav/Header";
import Sidebar from "../../admin/sidebar/Sidebar.jsx";

export default function MainPageAdmin() {
  return (
    <div>
      <div className=" min-h-[100vh]">
        <div>
          <Header className="z-0 " />
        </div>
        <div className=" lg:max-w-[2560px] md:max-w-[1600px]  mx-auto flex z-[999]">
          {/* <SidebarJS className="z-10 " /> */}
          <Sidebar className="z-10" />
          <div className="md:ms-[120px] ms-[50px] md:me-[20px] me-[10px] md:pt-24 pt-14 flex-1 border">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
