import Auth from "./admin/auth/Auth";
import MainPageAdmin from "./pages/mainPage/MainPageAdmin";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SellectChannel from "./admin/select_type/SellectChannel.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<MainPageAdmin />}>
          <Route path="select_channel" element={<SellectChannel />} />
          {/* <Route path="add" element={<AddCard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
