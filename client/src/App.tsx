import { Outlet } from "@tanstack/react-router";
import Sidebar from "./core/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h1>Hello world</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
