// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/auth-context";
import TeacherProvider from "./context/teacher-context";
import StudentProvider from "./context/student-context";
import GlobalStateProvider from "./context/global-context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <GlobalStateProvider>
        <TeacherProvider>
         <StudentProvider>
           <App />
           </StudentProvider>
        </TeacherProvider>
      </GlobalStateProvider>
    </AuthProvider>
  </BrowserRouter>
);
