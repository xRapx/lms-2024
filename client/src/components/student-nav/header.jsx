import { GraduationCap, Lightbulb, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { useState, useEffect } from "react";
import { MobileNavbar } from "../mobile-nav";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState(auth.user);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleLogin() {
    navigate("/auth");
  }

  function handleLogout() {
    // resetCredentials();
    localStorage.clear();
    toast.success("LogOut Success !!")
    navigate("/auth");
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        {isMobile ? (
          <div className="flex items-center space-x-1">
            <MobileNavbar />
          </div>
        ) : (
          <>
            <Link to="/home" className="flex items-center hover:text-black">
              <GraduationCap className="h-8 w-8 mr-4 " />
              <span className="font-extrabold md:text-xl text-[14px]">
                LMS LEARN
              </span>
            </Link>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                onClick={() => {
                  location.pathname.includes("/courses")
                    ? null
                    : navigate("/courses");
                }}
                className="text-[14px] md:text-[16px] animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-green-400 mt-3 px-4 py-2 rounded-lg tracking-wide "
              >
                <Lightbulb className="text-white"/>
                Explore Courses
              </Button>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                onClick={() => {
                  location.pathname.includes("/dashboard")
                    ? null
                    : navigate("/dashboard");
                }}
                className="text-[14px] md:text-[16px] font-medium"
              >
                Teacher Management
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 items-center">
          {!user ? (
            <Button onClick={handleLogin}>Login</Button>
          ) : (
            <>
              <div
                onClick={() => navigate("/student-courses")}
                className="flex cursor-pointer items-center gap-3"
              >
                <span className="font-extrabold md:text-xl text-[14px]">
                  My Courses
                </span>
                <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
              </div>
              <Button onClick={handleLogout}>Sign Out</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
