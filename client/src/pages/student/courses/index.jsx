/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { StudentContext } from "@/context/student-context";
import {
  ArrowUpDownIcon,
  BookCheck,
  BookOpen,
  CheckSquare,
  ChevronDown,
  HelpCircle,
  Home,
  Menu,
  Minus,
  Plus,
  Settings,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [loadingState, setLoadingState] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [openSections, setOpenSections] = useState({
    certificate: true,
    subject: false,
    level: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const { courses } = useContext(StudentContext);
  const navigate = useNavigate();

  function handleCourse(course){
    console.log(course)
  }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">All Courses</h1> */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Side Bar */}
        <aside
          className={` transition-all duration-300 ease-in-out ${
            isOpen ? "w-64" : "w-16"
          } flex flex-col`}
        >
          <div className="p-4 flex justify-between items-center">
            {isOpen && <h2 className="text-xl font-bold">My Course</h2>}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Sidebar"
            >
              <Menu className="h-10 w-10" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1 p-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                {isOpen && <span>Home</span>}
              </Button>
              <Collapsible
                open={openSections.certificate}
                onOpenChange={() => toggleSection("certificate")}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    <span className="flex items-center">
                      <BookCheck className="mr-2 h-4 w-4" />
                      {isOpen && <span>Certificates</span>}
                    </span>
                    {isOpen && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openSections.certificate ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="w-full space-y-1">
                  {isOpen && (
                    <>
                      {courses.map((certificate) => (
                        <Collapsible key={certificate._id}>
                          <CollapsibleTrigger className="w-[90%] ">
                            <Button
                              variant="ghost"
                              className="w-full flex justify-between"
                            >
                              <span className="flex items-center">
                                <CheckSquare className="mr-2 h-4 w-4 text-green-500" />
                                {isOpen && <span>{certificate.name}</span>}
                              </span>
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            {certificate.subjects.map((subject) => (
                              <Collapsible key={subject._id}>
                                <CollapsibleTrigger className="w-[80%]">
                                  <Button
                                    variant="ghost"
                                    className="w-full flex justify-between"
                                  >
                                    <span className="flex items-center">
                                      <Plus className="mr-2 h-4 w-4" />
                                      {isOpen && <span>{subject.name}</span>}
                                    </span>
                                  </Button>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                  {subject.examBoards.map((examBoard) => (
                                    <Collapsible key={examBoard._id}>
                                      <CollapsibleTrigger className="w-[70%]">
                                        <Button
                                          variant="ghost"
                                          className="w-full flex justify-between"
                                        >
                                          <span className="flex items-center ">
                                            <Minus className="mr-2 h-4 w-4" />
                                            {isOpen && (
                                              <span>{examBoard.name}</span>
                                            )}
                                          </span>
                                        </Button>
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        {examBoard.courses.map((course) => (
                                          <div
                                            key={course._id}
                                            className="course-item "
                                          >
                                            <Button
                                            onClick={() => handleCourse(course)}
                                              variant="ghost"
                                              className="w-full flex justify-end "
                                              >     
                                              {isOpen && (
                                                <span className="flex items-center bg-gray-300 mr-2 px-2 rounded-lg">
                                                  <BookOpen className="mr-2 h-4 w-4" />                                       
                                                      <span >{course.name}</span>
                                                  </span>
                                              )}
                                            </Button>
                                          </div>
                                        ))}
                                      </CollapsibleContent>
                                    </Collapsible>
                                  ))}
                                </CollapsibleContent>
                              </Collapsible>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </nav>
          <div className="p-4">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              {isOpen && <span>Settings</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              {isOpen && <span>Help</span>}
            </Button>
          </div>
        </aside>
        {/* End Side Bar */}

        <main className="flex-1">
          <div className="flex justify-end items-center mb-4 gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 p-5"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span className="text-[16px] font-medium">Sort By</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => setSort(value)}
                >
                  {courses.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem._id}
                      key={sortItem._id}
                    >
                      {sortItem.name}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-sm text-black font-bold">
              {courses.length} Results
            </span>
          </div>

          <div className="space-y-4">
            {courses && courses.length > 0 ? (
              courses.map((courseItem) => (
                <Card
                  // onClick={() => handleCourseNavigate(courseItem?._id)}
                  className="cursor-pointer"
                  key={courseItem?._id}
                >
                  <CardContent className="flex gap-4 p-4">
                    <div className="w-48 h-32 flex-shrink-0">
                      <img
                        src={courseItem?.image}
                        className="w-ful h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {courseItem?.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-1">
                        Created By
                        <span className="font-bold">
                          {courseItem?.instructorName}
                        </span>
                      </p>
                      <p className="text-[16px] text-gray-600 mt-3 mb-2">
                        {`${courseItem?.curriculum?.length} ${
                          courseItem?.curriculum?.length <= 1
                            ? "Lecture"
                            : "Lectures"
                        } - ${courseItem?.level} Level`}
                      </p>
                      <p className="font-bold text-lg">
                        ${courseItem?.pricing}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : loadingState ? (
              <Skeleton />
            ) : (
              <h1 className="font-extrabold text-4xl">No Courses Found</h1>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;
