import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

// Import Stylesheet
import './styles/global.css';


import logo from './logo.svg';
// import '../styles/global.css';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import CreateCourse from "./components/CreateCourse";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="courses" element={<Courses />}/>
        <Route path="/courses/:id" element={<CourseDetail />}/>
        <Route path="/courses/:id/update" element={<UpdateCourse />}/>
        <Route path="/courses/create" element={<CreateCourse />}/>
        <Route path="/usersignin" element={<UserSignIn />}/>
        <Route path="/usersignout" element={<UserSignUp />}/>
        <Route path="/usersignup" element={<UserSignOut />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;