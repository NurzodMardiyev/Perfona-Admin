import { useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Sider } = Layout;
import "../../App.css";

import { FaTrashAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiChatVoiceFill } from "react-icons/ri";
import { FaStubber } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatedModalDemo } from "../../components/ui/AnimatedModal";
import { ModalContext } from "../../context/ContextApi";

const items = [
  {
    key: "/admin/dashboard",
    label: "Bosh Sahifa",
    icon: <MdDashboard />,
  },
  {
    key: "/admin/users",
    label: "Foydalanuvchilar",
    icon: <RiChatVoiceFill />,
  },
  {
    key: "/admin/lessons",
    label: "Barcha Darsliklar",
    icon: <FaStubber />,
  },

  {
    key: "/admin/employees",
    label: "Xodimlar",
    icon: <IoPersonAddSharp />,
  },
  {
    key: "/superadminpanel/korzinka",
    label: "Savat",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { collapsed, setCollapsed } = useContext(ModalContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick(e) {
    navigate(e.key);
  }

  return (
    <div className="z-[99]">
      <div className="fixed ">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical " />
          <Menu
            onClick={handleClick}
            mode="inline"
            className="border h-[100vh] bg-gray-100 overflow-y-scroll sticky w-[300px] pt-[82px] pb-16"
            items={items}
            selectedKeys={location.pathname}
          />
        </Sider>

        <Layout>
          <div></div>
          <div
            className={`absolute bottom-[64px] bg-gradient-to-t from-[#0230C7] to-[#0097FF] p-5 transition-all duration-150`}
            style={{
              fontSize: "16px",
              width: collapsed ? 80 : 300,
              borderRadius: 0,
            }}
          >
            <div>
              <p
                className={`text-white text-[16px] text-center pb-2 transition-all duration-150 ${
                  collapsed ? "hidden" : ""
                }`}
              >
                👇 Taʻrif tanlang!
              </p>
              <Link
                // onClick={() => setShowType(!showType)}
                className={``}
              >
                <span>
                  <AnimatedModalDemo collapsed={collapsed} />
                </span>
              </Link>
            </div>
          </div>

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={`absolute bottom-0 bg-gray-200 hover:bg-gray-500 transition-all duration-150 `}
            style={{
              fontSize: "16px",

              width: collapsed ? 80 : 300,
              height: 64,
              borderRadius: 0,
            }}
          />
        </Layout>
      </div>

      <style jsx="true">{`
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-track {
          background: inherit;
        }
        ::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
