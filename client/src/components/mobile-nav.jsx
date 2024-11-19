import { GraduationCap, Menu,MenuSquare } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const MobileNavbar = () => {
	const navigate = useNavigate()

  return (
    	<Sheet>
	      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
	        <Menu />
	      </SheetTrigger>
	      <SheetContent side="left" className="p-0 bg-white pt-6 pl-6">
	        <Link to="/home" className="flex items-center hover:text-black">
	          <GraduationCap className="h-8 w-8 mr-4 " />
	          <span className="font-extrabold md:text-xl text-[24px]">
	            LMS LEARN
	          </span>
	        </Link>
	        <div className="flex items-center space-x-1 mt-4">
	          <Button
	            variant="ghost"
	            onClick={() => {
	              location.pathname.includes("/courses")
	                ? null
	                : navigate("/courses");
	            }}
	            className="text-[16px] md:text-[16px] font-medium"
	          >
	            <MenuSquare/> Explore Courses
	          </Button>
	        </div>
	        <div className="flex items-center space-x-1 mt-4">
	          <Button
	            variant="ghost"
	            onClick={() => {
	              location.pathname.includes("/dashboard")
	                ? null
	                : navigate("/dashboard");
	            }}
	            className="text-[16px] md:text-[16px] font-medium"
	          >
	            <MenuSquare/> DashBoard Teacher
	          </Button>
	        </div>
	      </SheetContent>
	    </Sheet>
  );
};
