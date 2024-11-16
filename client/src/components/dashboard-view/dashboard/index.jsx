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
import { Delete, DollarSign, Edit, Users } from "lucide-react";

function Dashboard() {
  //   function calculateTotalStudentsAndProfit() {
  //     const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
  //       (acc, course) => {
  //         const studentCount = course.students.length;
  //         acc.totalStudents += studentCount;
  //         acc.totalProfit += course.pricing * studentCount;

  //         course.students.forEach((student) => {
  //           acc.studentList.push({
  //             courseTitle: course.title,
  //             studentName: student.studentName,
  //             studentEmail: student.studentEmail,
  //           });
  //         });

  //         return acc;
  //       },
  //       {
  //         totalStudents: 0,
  //         totalProfit: 0,
  //         studentList: [],
  //       }
  //     );

  //     return {
  //       totalProfit,
  //       totalStudents,
  //       studentList,
  //     };
  //   }

  //   console.log(calculateTotalStudentsAndProfit());

  const config = [
    {
      icon: Users,
      label: "Total Students",
      value: "totalStudents",
    },
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "totalProfit",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {config.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Students List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Course Name</TableHead>
                  <TableHead className="text-center">Student Name</TableHead>
                  <TableHead className="text-center">Student Email</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Student 1</TableCell>
                  <TableCell> Name 1</TableCell>
                  <TableCell> user1@gmail.com</TableCell>
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
                <TableRow>
                  <TableCell className="font-medium">Student 1</TableCell>
                  <TableCell> Name 1</TableCell>
                  <TableCell> user1@gmail.com</TableCell>
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
    </div>
  );
}

export default Dashboard;
