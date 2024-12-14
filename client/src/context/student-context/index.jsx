/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { getDataDemo } from "@/services";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [loadingState, setLoadingState] = useState(true);

  // student state
  const [studentViewCourseDetails, setStudentViewCourseDetails] = useState([])

  // demo
  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [sidebar, setSideBar] = useState([]);
  const [certificateId, setCertificateId] = useState("");
  console.log(courseList);

  // fetch courses
  async function fetchCourse() {
    try {
      const response = await getDataDemo();
      const allCourses = [];
      const sidebarFilter = [];
      response.data.forEach((certificate) => {
        sidebarFilter.push(certificate);
        certificate.subjects.forEach((subject) => {
          subject.examBoards.forEach((examBoard) => {
            examBoard.courses.forEach((course) => {
              allCourses.push(course);
            });
          });
        });
      });
      setSideBar(sidebarFilter);
      setCourseList(allCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }
  useEffect(() => {
    fetchCourse();
  }, []);
  useEffect(() => {
    if (certificateId) {
      const filtered = courseList.filter(
        (course) => course.certificate_id === certificateId
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courseList);
    }
  }, [certificateId, courseList]);

  const handleFilter = (id) => {
    setCertificateId(id);
  };

  const handleSideBar = (course, filter = true) => {
    setCourseList((prevCourseList) => {
      const isExits = prevCourseList.some((c) => c._id === course._id);

      if (isExits) {
        const filtered = prevCourseList.filter((c) => c._id !== course._id);
        setFilteredCourses(filtered);
        return filtered;
      } else {
        if (filter) {
          const isValidCourse = sidebar.some(
            (certificate) =>
              certificate._id === course.certificate_id &&
              certificate.subjects.some(
                (subject) =>
                  subject._id === course.subject_id &&
                  subject.examBoards.some(
                    (examBoard) => examBoard._id === course.examBoard_id
                  )
              )
          );

          if (isValidCourse) {
            const updatedCourseList = [...prevCourseList, course];
            setFilteredCourses(updatedCourseList);
            return updatedCourseList;
          } else {
            console.warn("Course does not match the filter criteria");
            return prevCourseList;
          }
        } else {
          const updatedCourseList = [...prevCourseList, course];
          setFilteredCourses(updatedCourseList);
          return updatedCourseList;
        }
      }
    });
  };

  return (
    <StudentContext.Provider
      value={{
        loadingState,
        setLoadingState,
        sidebar,
        filteredCourses,
        handleFilter,
        setCourseList,
        handleSideBar,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
