
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

import { useEffect, useState } from "react";

const Dialog_Ui = () => {
	const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);
	const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] =
    useState(null);

	function handleSetFreePreview(getCurrentVideoInfo) {
		console.log(getCurrentVideoInfo);
		setDisplayCurrentVideoFreePreview(getCurrentVideoInfo?.videoUrl);
	}
	
	
	useEffect(() => {
		if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
	  }, [displayCurrentVideoFreePreview]);

	//   const getIndexOfFreePreviewUrl =
	//   studentViewCourseDetails !== null
	// 	? studentViewCourseDetails?.curriculum?.findIndex(
	// 		(item) => item.freePreview
	// 	  )
	// 	: -1;
	

	return (
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
            Video upload
            {/* <VideoPlayer
              url={displayCurrentVideoFreePreview}
              width="450px"
              height="200px"
            /> */}
          </div>
          <div className="flex flex-col gap-2">
            {/* {StudentViewCourseDetailsPage?.curriculum
              ?.filter((item) => item.freePreview)
              .map((filteredItem) => (
                <p
                  onClick={() => handleSetFreePreview(filteredItem)}
                  className="cursor-pointer text-[16px] font-medium"
                >
                  {filteredItem?.title}
                </p>
              ))} */}
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
	 );
}
 
export default Dialog_Ui;