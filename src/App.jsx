import Auth from "./admin/auth/Auth";
import MainPageAdmin from "./pages/mainPage/MainPageAdmin";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sellect from "./admin/select_type/Sellect";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/select" element={<Sellect />} />
        <Route path="/admin" element={<MainPageAdmin />}>
          {/* <Route path="add" element={<AddCard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
