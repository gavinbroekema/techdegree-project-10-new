
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

export default function UpdateCourse(props) {

  let { id } = useParams();

  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch courses data when the Courses component is rendered
  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    fetch("/api/courses/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
        console.log(course);
      });
  }, []);

  let updateCourseData = <p>Loading...</p>;
  if(course) {
    updateCourseData = 
    <div class="wrap">
        <h2>Update Course</h2>
        <form>
          <div class="main--flex">
            <div>
              <label for="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value={`${course.title}`}
              />

              <p>By Joe Smith</p>

              <label for="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="courseDescription">
                {course.description}
              </textarea>
            </div>
            <div>
              <label for="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                value={`${course.estimatedTime}`}
              />

              <label for="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded">
                {course.materialsNeeded}
              </textarea>
            </div>
          </div>
          <button class="button" type="submit">
            Update Course
          </button>
          <button
            class="button button-secondary"
            onclick="event.preventDefault(); location.href='/courses';"
          >
            Cancel
          </button>
        </form>
      </div>
  }

  return (
    <>
    <Header />
    {updateCourseData}
    </>
  );
}
