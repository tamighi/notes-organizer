import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
