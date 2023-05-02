import { React, useState, useEffect } from "react";

import Header from "./Header";
import CourseList from "./CourseList";

export default function Courses(props) {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch courses data when the Courses component is rendered
  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(courses);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {loading ? <p>Loading...</p> : <CourseList data={courses} />}
  
      
    </>
  );
}
