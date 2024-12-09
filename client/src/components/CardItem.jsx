/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import banner from "/src/assets/image/banner-img.png";

const CardItem = ({ courses }) => {
  const navigate = useNavigate()

  async function handleNavigate(id){
    try {
      await fetch(`https://server-lms-2024.onrender.com/student/course/get/details/${id}`)
      .then(response => response.json()) 
      .then(data => { console.log(data);
        // Navigate to the course page with the provided ID
        navigate(`/courses/details/${id}`, { state: data });
    });
     
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <Card key={course._id} className="hover:shadow-lg transform  rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105">
            <CardHeader className="p-0">
              <img
                src={banner}
                alt={course.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{course.name}</CardTitle>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Certificate</span>
                  <span className="font-medium">{course.certificate_name}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Subject</span>
                  <span className="font-medium">{course.subject_name}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t">
                  <Button onClick={() => handleNavigate(course._id)}>Learn</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardItem;
