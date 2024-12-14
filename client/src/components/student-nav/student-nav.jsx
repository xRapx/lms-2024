import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import { Footer } from "../Footer";

function StudentNavLayout() {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("course-progress") ? (
        <Header />
      ) : null}

      <Outlet />

      <Footer/>
    </div>
  );
}

export default StudentNavLayout;