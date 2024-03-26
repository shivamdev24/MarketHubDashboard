import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Home() {
  return (
    <div className="flex w-full ">
      <div className="fixed top-0">
        <Sidebar />
      </div>
      <div className=" w-full flex flex-col ml-56">
        <div className="backdrop-blur z-50 sticky top-0">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
