// ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
//
import { CheckCircle, Globe, Lock, PlayCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StudentViewCourseDetailsPage() {
  const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);
  const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
    useState(null);	

  // const [approvalUrl, setApprovalUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
  }, [displayCurrentVideoFreePreview]);

  return (
    <div className=" mx-auto p-4">
      <div className="bg-gray-900 text-white p-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">Title</h1>
        <p className="text-xl mb-4">Subtitle</p>
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <span>Created By instructorName</span>
          <span>Created On date</span>
          <span className="flex items-center">
            <Globe className="mr-1 h-4 w-4" />
            primaryLanguage
          </span>
          <span>Student</span>
        </div>
      </div>
      <div className="grid grid-cols-12 md:grid-row-1 gap-8 mt-8">
		{/* // course details */}
        <main className="col-span-4 flex-grow ">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What you&apos;ll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>objective</span>
                </li>
				<li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>objective</span>
                </li>
				<li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>objective</span>
                </li>
				<li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>objective</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Description</CardTitle>
            </CardHeader>
            <CardContent>Description</CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <li className="cursor-pointer flex items-center mb-4">
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>Course 1</span>
              </li>
			  <li className="cursor-pointer flex items-center mb-4">
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>Course 2</span>
              </li>
			  <li className="cursor-pointer flex items-center mb-4">
                <PlayCircle className="mr-2 h-4 w-4" />
                <span>Course 3</span>
              </li>
            </CardContent>
          </Card>
        </main>
        <aside className="col-span-8 w-full ">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="mb-4">
                <span className="text-3xl font-bold">Category</span>
              </div>
              <div className="aspect-video mb-4 rounded-lg flex items-center justify-center">
					Exam & Test
              </div>
              <Button className="w-full">Complete Course</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
		{/* end course details */}
	  {/*Dialog  */}
      <Dialog
        open={showFreePreviewDialog}
        onOpenChange={() => {
          setShowFreePreviewDialog(false);
          setDisplayCurrentVideoFreePreview(null);
        }}
      >
        <DialogContent className="w-[800px]">
          <DialogHeader>
            <DialogTitle>Course Preview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-lg flex items-center justify-center">
            Video demo
          </div>
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer text-[16px] font-medium">Course 1</p>
			<p className="cursor-pointer text-[16px] font-medium">Course 2</p>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentViewCourseDetailsPage;
