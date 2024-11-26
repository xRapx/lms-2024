/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  // checkCoursePurchaseInfoService,
  // createPaymentService,
  fetchCourseDetailsService,
} from "@/services";
import axios from "axios";
import {
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronsUpDown,
  FileText,
  Globe,
  Lock,
  PlayCircle,
  VideoIcon,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const { auth } = useContext(AuthContext);

  const [approvalUrl, setApprovalUrl] = useState("");

  //Collapsible ui sate
  const [isModule1Open, setIsModule1Open] = useState(false);
  const [isModule2Open, setIsModule2Open] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // demo subject data====================================
  const [subjects, setSubjects] = useState([]);
  const [examboard, setExamboard] = useState([]);
  console.log(subjects);
  console.log(examboard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dashboard/course/subjects"
        );
        console.log(response);
        if (response.data.success) {
          setSubjects(response.data.data);
          setExamboard(response.data.data.subject.examBoards);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // end demo==========================================

  async function fetchStudentViewCourseDetails() {
    // const checkCoursePurchaseInfoResponse =
    //   await checkCoursePurchaseInfoService(
    //     currentCourseDetailsId,
    //     auth?.user._id
    //   );

    // if (
    //   checkCoursePurchaseInfoResponse?.success &&
    //   checkCoursePurchaseInfoResponse?.data
    // ) {
    //   navigate(`/course-progress/${currentCourseDetailsId}`);
    //   return;
    // }

    const response = await fetchCourseDetailsService(currentCourseDetailsId);

    if (response?.success) {
      setStudentViewCourseDetails(response?.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  useEffect(() => {
    if (!location.pathname.includes("course/details"))
      setStudentViewCourseDetails(null), setCurrentCourseDetailsId(null);
  }, [location.pathname]);

  if (loadingState) return <Skeleton />;

  if (approvalUrl !== "") {
    window.location.href = approvalUrl;
  }

  const modules = [
    {
      title: "Module 1: Introduction",
      lessons: [
        { icon: BookOpen, title: "Lesson 1: Course Overview", value:"item1" },
        { icon: VideoIcon, title: "Lesson 2: Getting Started",value:"item2" },
        { icon: FileText, title: "Quiz: Module 1 Assessment",value:"item3" },
      ],
    },
    {
      title: "Module 2: Core Concepts",
      lessons: [
        { icon: VideoIcon, title: "Lesson 1: Fundamental wwwwwwwwww" ,value:"item4"},
        { icon: BookOpen, title: "Lesson 2: Key Theories" ,value:"item5"},
        { icon: FileText, title: "Assignment: Analysis", value:"item6" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex space-x-8">
          <aside className="w-1/5 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-sm font-semibold mb-2">
                  Course Navigation
                </h2>
                {modules.map((module, index) => (
                  <Collapsible
                    key={index}
                    open={index === 0 ? isModule1Open : isModule2Open}
                    onOpenChange={
                      index === 0 ? setIsModule1Open : setIsModule2Open
                    }
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-2 text-sm font-medium mb-2">
                      {module.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          (index === 0 ? isModule1Open : isModule2Open)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="rounded-md bg-gray-100 p-2 text-sm"
                        >
                          <TabsList className="">
                            <TabsTrigger value={lesson.value}>
                              <div className="rounded-md bg-gray-100 p-2 text-sm flex items-center">
                                <BookOpen className="h-4 w-4 mr-2" />
                                <p className="overflow-ellipsis">{lesson.title}</p>
                              </div>
                            </TabsTrigger>
                          </TabsList>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          </aside>

          <section className="flex-1">
      
            <TabsContent
              value="item1"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Course Overview</h2>
              <p className="mb-4">
                Welcome to Course 1. This comprehensive course will guide you
                through...
              </p>
              <h3 className="text-lg font-semibold mb-2">What you'll learn</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Fundamental concepts of the subject</li>
                <li>Practical applications and real-world examples</li>
                <li>Advanced techniques and strategies</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Course Description</h3>
              <p>
                This course is designed to provide you with a deep understanding
                of the subject matter. Through a combination of video lectures,
                interactive quizzes, and hands-on projects, you'll gain both
                theoretical knowledge and practical skills.
              </p>
            </TabsContent>

            <TabsContent
              value="item2"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
              {modules.map((module, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                  <ul className="list-disc list-inside">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="mb-1 flex items-center">
                        <lesson.icon className="h-4 w-4 mr-2 inline" />
                        {lesson.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>

            <TabsContent
              value="item3"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Course Resources</h2>
              <ul className="list-disc list-inside">
                <li>
                  Course textbook: "Introduction to the Subject" by John Doe
                </li>
                <li>
                  Supplementary reading materials (available in PDF format)
                </li>
                <li>Online discussion forum for peer-to-peer learning</li>
                <li>
                  Weekly office hours with the instructor (schedule to be
                  announced)
                </li>
              </ul>
            </TabsContent>

            <TabsContent
              value="item4"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Course Discussions</h2>
              <p className="mb-4">
                Welcome to the course discussion forum. Here, you can interact
                with your peers and instructors, ask questions, and share
                insights.
              </p>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">
                    Thread: Question about Module 1
                  </h3>
                  <p className="text-sm text-gray-600">
                    Started by: Jane Smith | 2 days ago
                  </p>
                  <p className="mt-2">
                    I'm having trouble understanding the concept explained in
                    Lesson 2. Can someone help clarify?
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">
                    Thread: Great resource for additional study
                  </h3>
                  <p className="text-sm text-gray-600">
                    Started by: Mike Johnson | 1 week ago
                  </p>
                  <p className="mt-2">
                    I found this amazing article that complements the material
                    in Module 2. Thought I'd share it with everyone!
                  </p>
                </div>
              </div>
              <Button className="mt-4">Start New Discussion</Button>
            </TabsContent>

            <TabsContent
              value="item5"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Course Discussions</h2>
              <p className="mb-4">
                Welcome to the course discussion forum. Here, you can interact
                with your peers and instructors, ask questions, and share
                insights.
              </p>
              <Button className="mt-4">Start New Discussion</Button>
            </TabsContent>

            <TabsContent
              value="item4"
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold">
                    Thread: Question about Module 1
                  </h3>
                  <p className="text-sm text-gray-600">
                    Started by: Jane Smith | 2 days ago
                  </p>
                  <p className="mt-2">
                    I'm having trouble understanding the concept explained in
                    Lesson 2. Can someone help clarify?
                  </p>
                </div>
              </div>
              <Button className="mt-4">Start New Discussion</Button>
            </TabsContent>
          </section>
        </div>
      </Tabs>
      <div className="mt-8 text-center">
        <Button className="mt-4">Complete Lesson</Button>
      </div>
    </div>
  );
}

export default StudentViewCourseDetailsPage;
