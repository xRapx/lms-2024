import { useEffect, useState } from 'react';
import axios from 'axios';

const MultiLevelMenu = () => {
  const [subjects, setSubjects] = useState([]);
  console.log(subjects)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dashboard/course/subjects');
        if (response.data.success) {
          setSubjects(response.data.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {subjects.map((subject) => (
        <div key={subject._id}>
          <h2>{subject.name}</h2>
          {subject.examBoards.map((examBoard) => (
            <div key={examBoard._id} style={{ marginLeft: '20px' }}>
              <h3>{examBoard.name}</h3>
              {examBoard.courses.map((course) => (
                <div key={course._id} style={{ marginLeft: '40px' }}>
                  <p>{course.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MultiLevelMenu;
