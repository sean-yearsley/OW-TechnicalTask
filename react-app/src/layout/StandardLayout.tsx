import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
function StandardLayout() {
  return (
    <div>
      <div className="flex bg-[#006A87] border-b-4 border-b-[#FF6C50] h-24">
        <div className="flex">
          <Logo className="h-20 mt-1" />
        </div>
      </div>
      <div id="app-body">
        <Outlet />
      </div>
    </div>
  );
}

export default StandardLayout;