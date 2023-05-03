import React from "react";
import Course from "./Course";

export default function CourseList(props) {
  const results = props.data;

  let courses;
  if (results.length > 0) {
    courses = results.map((course) => (
      <Course
        title={course.title}
        description={course.description}
        id={course.id}
        key={course.id}
      />
    ));
  } else {
    courses = <p>No Courses</p>;
  }
  return (
    <main>
      <div class="wrap main--grid">{courses}
      <a class="course--module course--add--module" href="/courses/create">
        <span class="course--add--title">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 13 13"
            class="add"
          >
            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
          </svg>
          New Course
        </span>
      </a>
      </div>
    </main>
  );
}
