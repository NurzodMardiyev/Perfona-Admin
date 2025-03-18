import { Outlet } from "react-router-dom";
import Header from "../../admin/headerNav/Header";
import Sidebar from "../../admin/sidebar/Sidebar.jsx";
import { useContext } from "react";
import { ModalContext } from "../../context/ContextApi.tsx";

export default function MainPageAdmin() {
  const { collapsed } = useContext(ModalContext);

  return (
    <div>
      <div className=" min-h-[100vh]">
        <div>
          <Header className="z-0 " />
        </div>
        <div className=" lg:max-w-[2560px] md:max-w-[1600px]  mx-auto flex z-[999]">
          {/* <SidebarJS className="z-10 " /> */}
          <div className="z-10 hidden md:block">
            <Sidebar className=" " />
          </div>
          <div
            className={`${
              collapsed ? "md:ms-[100px]" : "md:ms-[320px]"
            } transition-all duration-150 ms-[0px]  md:me-[20px]  md:pt-24 pt-14 flex-1`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
