import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";

function StudentNavLayout() {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("course-progress") ? (
        <Header />
      ) : null}

      <Outlet />
    </div>
  );
}

export default StudentNavLayout;