import DashBoardCourses from "@/components/dashboard-view/courses";
import DashBoard from "@/components/dashboard-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { AuthContext } from "@/context/auth-context";
// import { InstructorContext } from "@/context/instructor-context";
// import { fetchInstructorCourseListService } from "@/services";
import { useEffect, useState } from "react";
// import StudentHomePage from "../student/home";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart, Book, LogOut, Menu } from "lucide-react";

function Dashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate()

  //   const { resetCredentials } = useContext(AuthContext);
  //   const { instructorCoursesList, setInstructorCoursesList } =
  //     useContext(InstructorContext);

  //   async function fetchAllCourses() {
  //     const response = await fetchInstructorCourseListService();
  //     if (response?.success) setInstructorCoursesList(response?.data);
  //   }

  //   useEffect(() => {
  //     fetchAllCourses();
  //   }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <DashBoard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <DashBoardCourses />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    localStorage.clear();
    navigate("/auth")
  }

  //   console.log(instructorCoursesList, "instructorCoursesList");

  return (
    <div className="flex h-full xl:flex-row sm:flex-col min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Teacher View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Link to="/home">
            <div className="flex items-center justify-center space-x-2 text-xl text-left hover:bg-white mb-4 w-40 rounded-full">
              <ArrowLeft />
              <span>Home</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem, idx) => (
              <TabsContent key={idx} value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

    </div>
  );
}

export default Dashboardpage;
