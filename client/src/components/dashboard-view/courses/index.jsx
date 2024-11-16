import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import {
//   courseCurriculumInitialFormData,
//   courseLandingInitialFormData,
// } from "@/config";
// import { InstructorContext } from "@/context/instructor-context";
import { Delete, Edit } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function DashBoardCourses() {
  const navigate = useNavigate();
  //   const {
  //     setCurrentEditedCourseId,
  //     setCourseLandingFormData,
  //     setCourseCurriculumFormData,
  //   } = useContext(InstructorContext);

  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button
          //   onClick={() => {
          //     setCurrentEditedCourseId(null);
          //     setCourseLandingFormData(courseLandingInitialFormData);
          //     setCourseCurriculumFormData(courseCurriculumInitialFormData);
          //     navigate("/instructor/create-new-course");
          //   }}
          className="p-6"
        >
          Create New Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Course</TableHead>
                <TableHead className="text-center">Students</TableHead>
                <TableHead className="text-center">Revenue</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">title</TableCell>
                <TableCell>students course</TableCell>
                <TableCell>$300</TableCell>
                <TableCell >
                  <Button
                    //   onClick={() => {
                    //     navigate(`/instructor/edit-course/${course?._id}`);
                    //   }}
                    variant="ghost"
                    size="sm"
                  >
                    <Edit className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Delete className="h-6 w-6" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashBoardCourses;
