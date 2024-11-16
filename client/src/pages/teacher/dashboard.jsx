/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
//
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DashBoardPage() {
  const navigate = useNavigate();
  const params = useParams();

  function handleCreateCourse() {}

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        <Button
          //   disabled={!validateFormData()}
          className="text-sm tracking-wider font-bold px-8"
          onClick={handleCreateCourse}
        >
          SUBMIT
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                CourseCurriculum Component
              </TabsContent>
              <TabsContent value="course-landing-page">
                CourseLanding Component
              </TabsContent>
              <TabsContent value="settings">
                CourseSettings Component
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashBoardPage;
