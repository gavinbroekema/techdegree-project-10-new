import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

export default function CreateCourse(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [materialsNeeded, setMaterialsNeeded] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/courses", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        estimatedTime,
        materialsNeeded,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <>
      <Header />
      <main>
        <div class="wrap">
          <h2>Create Course</h2>
          {/* <div class="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
              <li>Please provide a value for "Title"</li>
              <li>Please provide a value for "Description"</li>
            </ul>
          </div> */}
          <form method="POST" onSubmit={handleSubmit} action="/courses">
            <div class="main--flex">
              <div>
                <label for="courseTitle">Course Title</label>
                <input id="courseTitle" name="courseTitle" type="text" 
                  onChange={(e) => setTitle(e.target.value)}
                />

                <p>By Joe Smith</p>

                <label for="courseDescription">Course Description</label>
                <textarea
                  id="courseDescription"
                  name="courseDescription"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label for="estimatedTime">Estimated Time</label>
                <input
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  onChange={(e) => setEstimatedTime(e.target.value)}
                />

                <label for="materialsNeeded">Materials Needed</label>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  onChange={(e) => setMaterialsNeeded(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button class="button" type="submit">
              Create Course
            </button>
            <button
              class="button button-secondary"
              onClick="event.preventDefault(); location.href='/courses';"
            >
              Cancel
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
