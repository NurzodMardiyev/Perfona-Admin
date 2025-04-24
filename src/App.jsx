import Auth from "./admin/auth/Auth";
import MainPageAdmin from "./pages/mainPage/MainPageAdmin";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SellectChannel from "./admin/select_type/SellectChannel.jsx";
import SellectCourse from "./admin/select_type/SellectCourse.jsx";
import Dashboard from "./admin/dashboard/Dashboard.jsx";
import ActiveUsers from "./admin/users/Users.jsx";
import TokenRefresher from "./admin/auth/TokenRefresh.js";
import Transfers from "./admin/transuction/Transfers.jsx";
import SellectChannelTwoStep from "./admin/select_type/SelectChannelTwoStep.jsx";
import SelectChannelThreeStep from "./admin/select_type/SelectChannelThreeStep.jsx";

function App() {
  // console.log(refresh);

  return (
    <div>
      <TokenRefresher />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="admin" element={<MainPageAdmin />}>
          <Route path="select_channel" element={<SellectChannel />} />
          <Route path="select_course" element={<SellectCourse />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<ActiveUsers />} />
          <Route path="transition-all" element={<Transfers />} />
          <Route
            path="select_channel_three-step"
            element={<SelectChannelThreeStep />}
          />
          <Route
            path="select_channel_two-step"
            element={<SellectChannelTwoStep />}
          />
          {/* <Route path="add" element={<AddCard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
