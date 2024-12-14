/* eslint-disable react/prop-types */
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  BookCheck,
  BookOpen,
  CheckSquare,
  ChevronDown,
  HelpCircle,
  Home,
  Menu,
  Minus,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

function SideBar({ sidebar, handleSideBar }) {
  const [isOpen, setIsOpen] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [openSections, setOpenSections] = useState({
    certificate: true,
    subject: false,
    level: false,
  });
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // useDebounce ngăn chặn nhấp 2 lần yêu cầu
  const handleButtonClick = (course) => {
    setDisabledButtons((prev) => ({ ...prev, [course._id]: true }));
    handleSideBar(course);
    setTimeout(() => {
      setDisabledButtons((prev) => ({ ...prev, [course._id]: false }));
    }, 3000);
    // Thời gian chờ để bật lại button (1 giây)
  };

  return (
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
                  {sidebar?.map((certificate) => (
                    <Collapsible key={certificate._id}>
                      <CollapsibleTrigger className="w-[90%] ">
                        <Button
                          variant="ghost"
                          className="w-full flex justify-between"
                        >
                          <span className="flex items-center ">
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
                                        <button
                                          onClick={() =>
                                            handleButtonClick(course)
                                          }
                                          disabled={disabledButtons[course._id]}
                                          className="w-full flex justify-end "
                                        >
                                          {isOpen && (
                                            <span className="flex items-center mr-2 px-2 rounded-lg">
                                              <BookOpen className="mr-2 h-4 w-4" />
                                              <span>{course.name}</span>
                                            </span>
                                          )}
                                        </button>
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
        <Button variant="ghost" className="w-full flex justify-center">
          <Link to="/FAQ">
            <span className="flex items-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              {isOpen && <span> Help</span>}
            </span>
          </Link>
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;
