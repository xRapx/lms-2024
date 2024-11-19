import {
	courseCurriculumInitialFormData,
	courseLandingInitialFormData,
  } from "@/config";
  import { createContext, useState } from "react";
  
  export const TeacherContext = createContext(null);
  
  export default function TeacherProvider({ children }) {
	const [courseLandingFormData, setCourseLandingFormData] = useState(
	  courseLandingInitialFormData
	);
	const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
	  courseCurriculumInitialFormData
	);
	const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
	const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] =
	  useState(0);
	const [instructorCoursesList, setInstructorCoursesList] = useState([]);
	const [currentEditedCourseId, setCurrentEditedCourseId] = useState(null);
  
	return (
	  <TeacherContext.Provider
		value={{
		  courseLandingFormData,
		  setCourseLandingFormData,
		  courseCurriculumFormData,
		  setCourseCurriculumFormData,
		  mediaUploadProgress,
		  setMediaUploadProgress,
		  mediaUploadProgressPercentage,
		  setMediaUploadProgressPercentage,
		  instructorCoursesList,
		  setInstructorCoursesList,
		  currentEditedCourseId,
		  setCurrentEditedCourseId,
		}}
	  >
		{children}
	  </TeacherContext.Provider>
	);
  }