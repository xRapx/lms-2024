/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';

// Tạo context
export const GlobalStateContext = createContext();

export default function GlobalStateProvider ({ children }) {
  const [certificates, setCertificates] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [examBoards, setExamBoards] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);

  // Giả sử bạn có một hàm để lấy dữ liệu từ API
  useEffect(() => {
    fetch('https://server-lms-2024.onrender.com/dashboard/course/get-data')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCertificates(data.data);
          const allSubjects = [];
          const allExamBoards = [];
          const allCourses = [];
          const allLectures = [];

          data.data.forEach(certificate => {
            certificate.subjects.forEach(subject => {
              allSubjects.push(subject);
              subject.examBoards.forEach(examBoard => {
                allExamBoards.push(examBoard);
                examBoard.courses.forEach(course => {
                  allCourses.push(course);
                  course.lectures.forEach(lecture => {
                    allLectures.push(lecture);
                  });
                });
              });
            });
          });

          setSubjects(allSubjects);
          setExamBoards(allExamBoards);
          setCourses(allCourses);
          setLectures(allLectures);
        }
      });
  }, []);

  return (
    <GlobalStateContext.Provider value={{ certificates, subjects, examBoards, courses, lectures }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
