/* eslint-disable no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import StudentHomePage from "./pages/student/home";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";

// import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import StudentNavLayout from "./components/student-nav/student-nav";
import DashboardPage from "./pages/teacher/index";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import RouteGuard from "./components/middleware/auth-middleware";
import AddNewCoursePage from "./pages/teacher/add-new-course";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {" "}
        <Route path="/auth" element={<AuthPage />} />{" "}
        <Route
          path="/dashboard"
          element={<RouteGuard element={<DashboardPage />} />}
        />{" "}
       <Route
        path="/dashboard/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
        <Route path="/" element={<RouteGuard element={<StudentNavLayout />} />}>
          {" "}
          <Route path="" element={<StudentHomePage />} />{" "}
          <Route path="home" element={<StudentHomePage />} />{" "}
          <Route path="courses" element={<StudentViewCoursesPage />} />{" "}
          <Route
            path="course/details"
            element={<StudentViewCourseDetailsPage />}
          />{" "}
          <Route path="student-courses" element={<StudentCoursesPage />} />{" "}
          <Route
            path="course-progress/:id"
            element={<StudentViewCourseProgressPage />}
          />{" "}
        </Route>{" "}
      </Routes>
    </>
  );
}

export default App;
