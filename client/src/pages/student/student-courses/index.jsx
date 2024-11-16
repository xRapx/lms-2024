import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { AuthContext } from "@/context/auth-context";
// import { StudentContext } from "@/context/student-context";
// import { fetchStudentBoughtCoursesService } from "@/services";
import { Watch } from "lucide-react";
import {  useEffect } from "react";
import { Link } from "react-router-dom";
import image from "/src/assets/image/image1.png";

function StudentCoursesPage() {
  //   const { auth } = useContext(AuthContext);
  //   const { studentBoughtCoursesList, setStudentBoughtCoursesList } =
  //     useContext(StudentContext);
//   const navigate = useNavigate();

  async function fetchStudentBoughtCourses() {
    // const response = await fetchStudentBoughtCoursesService(auth?.user?._id);
    // if (response?.success) {
    //   setStudentBoughtCoursesList(response?.data);
    // }
    // console.log(response);
  }
  useEffect(() => {
    fetchStudentBoughtCourses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* {studentBoughtCoursesList && studentBoughtCoursesList.length > 0 ? (
          studentBoughtCoursesList.map((course) => ( */}
        <Link to="/course/details">
          <Card className="flex flex-col">
            <CardContent className="p-4 flex-grow">
              <img
                src={image}
                alt="title"
                className="h-52 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-bold mb-1">title</h3>
              <p className="text-sm text-gray-700 mb-2">Name Course</p>
            </CardContent>
            <CardFooter>
              <Button
                //   onClick={() =>
                //     navigate(`/course-progress/${course?.courseId}`)
                //   }
                className="flex-1"
              >
                <Watch className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link to="/course/details">
          <Card className="flex flex-col">
            <CardContent className="p-4 flex-grow">
              <img
                src={image}
                alt="title"
                className="h-52 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-bold mb-1">title</h3>
              <p className="text-sm text-gray-700 mb-2">Name Course</p>
            </CardContent>
            <CardFooter>
              <Button
                //   onClick={() =>
                //     navigate(`/course-progress/${course?.courseId}`)
                //   }
                className="flex-1"
              >
                <Watch className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link to="/course/details">
          <Card className="flex flex-col">
            <CardContent className="p-4 flex-grow">
              <img
                src={image}
                alt="title"
                className="h-52 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-bold mb-1">title</h3>
              <p className="text-sm text-gray-700 mb-2">Name Course</p>
            </CardContent>
            <CardFooter>
              <Button
                //   onClick={() =>
                //     navigate(`/course-progress/${course?.courseId}`)
                //   }
                className="flex-1"
              >
                <Watch className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link to="/course/details">
          <Card className="flex flex-col">
            <CardContent className="p-4 flex-grow">
              <img
                src={image}
                alt="title"
                className="h-52 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-bold mb-1">title</h3>
              <p className="text-sm text-gray-700 mb-2">Name Course</p>
            </CardContent>
            <CardFooter>
              <Button
                //   onClick={() =>
                //     navigate(`/course-progress/${course?.courseId}`)
                //   }
                className="flex-1"
              >
                <Watch className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default StudentCoursesPage;
