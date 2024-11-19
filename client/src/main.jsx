// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/auth-context";
import TeacherProvider from "./context/teacher-context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <TeacherProvider>
        <App />
      </TeacherProvider>
    </AuthProvider>
  </BrowserRouter>
);
