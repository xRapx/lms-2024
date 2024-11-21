import { Button } from "@/components/ui/button";
import banner from "/src/assets/image/banner-img.png";
import image from "/src/assets/image/image1.png";
import { useContext, useEffect } from "react";
import { TeacherContext } from "@/context/teacher-context";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
import { fetchCourseDetailsService, getAllCourseListService } from "@/services";
import { courseCategories } from "@/config";

function StudentHomePage() {
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(TeacherContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    localStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    localStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate("/courses");
  }

  async function fetchAllViewCourses() {
    const response = await getAllCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    const response = await fetchCourseDetailsService(
      getCurrentCourseId,
    );
    console.log(response)

    if (response?.success) {
      if (response?.data) {      
        navigate(`/course/details/${getCurrentCourseId}`);
      }
    }
  }

  useEffect(() => {
    fetchAllViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-4">Learning thet gets you</h1>
          <p className="text-xl">
            Skills for your present and your future. Get Started with US
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-8 px-4 lg:px-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
              className="justify-start"
              variant="outline"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Featured COourses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorCoursesList && instructorCoursesList.length > 0 ? (
            instructorCoursesList.map((courseItem) => (
              <div
                key={courseItem._id}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="border rounded-lg overflow-hidden shadow cursor-pointer"
              >
                <img
                  src={courseItem?.image}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-[16px]">
                    ${courseItem?.pricing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>No Courses Found</h1>
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
