/* eslint-disable react/jsx-key */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import banner from "/src/assets/image/banner-img.png"
import { useLocation } from "react-router-dom";

//fake api

function StudentViewCourseDetailsPage() {
  const [approvalUrl] = useState("");
  const location = useLocation()
  const data = location.state.data;
  console.log(data)
  const [courses] = useState(data);
  const [lectureValue, setLectureValue] = useState([]);
  const [lessons , setLessons] = useState([])
  console.log(lectureValue)
  console.log(lessons)

  //Collapsible ui sate
  const [isModule1Open, setIsModule1Open] = useState(false);
  const [isModule2Open, setIsModule2Open] = useState(false);
  const [activeTab, setActiveTab] = useState(lectureValue);

  // end demo==========================================

  if (approvalUrl !== "") {
    window.location.href = approvalUrl;
  }

  useEffect(() => {
    if (data && data.lectures) {
      setLectureValue(data.lectures.map(lecture=> lecture.value));
      setLessons(data.lectures.flatMap(lecture => lecture.lessons.map(lesson => lesson)));
    }
  }, [data]);


  const modules = [
    {
      title: courses.name,
      lessons: [
        { icon: BookOpen, title: courses.lectures, value: lectureValue.value },
      ],
    },
  ];

  function handlePDF (pdfLink) { 
    window.open(pdfLink, '_blank'); 
  };

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
                          className="rounded-md text-sm"
                        >
                          <TabsList className="">
                            <TabsTrigger value={lesson.value}>
                              {
                                lesson.title.map((item,index) => (
                                  <div className=" text-sm flex items-center" key={index}>
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  <p className="overflow-ellipsis">
                                    {item.name}
                                  </p>
                                </div>
                                ))
                              }                            
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
              value={activeTab}
              className="bg-white rounded-lg shadow-md"
            >
              <div className="min-h-screen bg-gray-100 flex  justify-center p-2">
                {
                  lessons.map((lesson,index) => (
                    <Card className="w-full max-w-6xl overflow-hidden" key={index}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                          <img
                            src={banner}
                            alt={`Cover image for ${lesson.name}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="md:w-1/2 p-6 flex flex-col justify-between">
                          <div>
                            <CardHeader>
                              <CardTitle className="text-3xl font-bold mb-2">
                                {lesson.name}
                              </CardTitle>
                              <CardDescription className="text-lg text-gray-600 mb-4">
                                Mô tả
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <p>
                                  <span className="font-semibold">Instructor:</span>{" "}
                                  Mr. Phong
                                </p>
                                <p>
                                  <span className="font-semibold">Duration:</span>{" "}
                                  100 lessons
                                </p>
                                <p>
                                  <span className="font-semibold">Level:</span>{" "}
                                  Beginer
                                </p>
                              </div>
                            </CardContent>
                          </div>
                          <CardFooter className="mt-6">
                              <Button size="lg" className="w-full" onClick={() => handlePDF(lesson.pdfLink)}>
                                  Start Learning
                              </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
               
              </div>
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
