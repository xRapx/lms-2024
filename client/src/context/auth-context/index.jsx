import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { loginService, registerService } from "@/services";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
	authenticate: false,
    user: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  
  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await registerService(signUpFormData);
      if (data.success) {
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      toast.error("An error occurred during registration!");
      console.error("Error registering:", error);
    } finally {
      setLoading(false);
    }
  }
  
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginService(signInFormData);
      if (data.success) {
        setAuth({ authenticate: true, user: data.data.user });
        toast.success("Login successful!");
		navigate("/"); // Điều hướng về trang chủ sau khi đăng nhập
      } else {
        setAuth({ authenticate: false, user: null });
        toast.error("Invalid login credentials!");
      }
    } catch (error) {
      setAuth({ authenticate: false, user: null });
      toast.error("An error occurred during login!");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegister,
        handleLogin,
        auth,
      }}
    >
      {" "}
      {loading ? <Skeleton /> : children} <ToastContainer />{" "}
    </AuthContext.Provider>
  );
}
