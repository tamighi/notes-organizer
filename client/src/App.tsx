import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Outlet />
    </div>
  );
};

export default App;
