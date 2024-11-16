/* eslint-disable no-unused-vars */
import './App.css'
import { Route, Routes } from "react-router-dom";
import AuthPage from './pages/auth';
import StudentHomePage from './pages/student/home';
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";

// import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";
import StudentNavLayout from './components/student-nav/student-nav';
import Dashboardpage from './pages/teacher';

function App() {

  return (
   <>
      <Routes>

        <Route path='/dashboard' element={<Dashboardpage/>}/>

       <Route path='/' element={<StudentNavLayout/>}>
          {/* <Route path="/" element={<AuthPage/>}/> */}
          <Route path="" element={<StudentHomePage/>}/>
          <Route path="home" element={<StudentHomePage/>}/>
          
          <Route path="courses" element={<StudentViewCoursesPage />} />
          <Route path="course/details" element={<StudentViewCourseDetailsPage />}
          />
          <Route path="student-courses" element={<StudentCoursesPage />} />
          {/* <Route path="payment-return" element={<PaypalPaymentReturnPage />} /> */}
          <Route
            path="course-progress/:id"
            element={<StudentViewCourseProgressPage />}
          />
       </Route>
    </Routes>
   </>
  )
}

export default App
