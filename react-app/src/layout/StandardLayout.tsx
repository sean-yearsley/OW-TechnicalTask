import { Outlet } from "react-router-dom";

function StandardLayout() {
    return (
      <div>
        <p>Standard Layout</p>
        <div id="app-body">
          <Outlet/>
        </div>
      </div>
    );
  }
  
  export default StandardLayout;
  