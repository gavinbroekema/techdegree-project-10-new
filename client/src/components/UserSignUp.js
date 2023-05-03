import React from 'react';
import { Link } from "react-router-dom";

export default function UserSignUp(props) {
  return (
    <header>
      <div class="wrap header--flex">
        <h1 class="header--logo">
          <Link to="/courses">Courses</Link>
        </h1>
        <nav>
          <ul class="header--signedin">
            <li>Welcome, Joe Smith!</li>
            <li>
              <a href="sign-out.html">Sign Out</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
