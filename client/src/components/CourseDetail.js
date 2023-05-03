import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

export default function CourseDetail(props) {
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

  return (
    
    <>  
      <Header />
      <main>
        <div class="actions--bar">
          <div class="wrap">
            <Link class="button" to={`/courses/${id}/update`}>
              Update Course
            </Link>
            <Link class="button" to={`/courses/${id}/delete`}>
              Delete Course
            </Link>
            <a class="button button-secondary" href="/courses">
              Return to List
            </a>
          </div>
        </div>

        <div class="wrap">
          <h2>Course Detail</h2>
          <form>
            <div class="main--flex">
              <div>
                <h3 class="course--detail--title">Course</h3>
                <h4 class="course--name">{course.title}</h4>
                <p>{course.author}</p>
                <p>
                  {course.description}
                </p>
              </div>
              <div>
                <h3 class="course--detail--title">Estimated Time</h3>
                <p>{course.estimatedTime}</p>

                <h3 class="course--detail--title">Materials Needed</h3>
                <ul class="course--detail--list">
                  <li>{course.materialsNeeded}</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
