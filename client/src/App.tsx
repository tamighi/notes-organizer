import { Outlet } from "@tanstack/react-router";
import Sidebar from "./core/Sidebar";

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
