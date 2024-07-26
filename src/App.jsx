import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/Layout/SideMenu";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import CourseList from "./components/Courses/CourseList";
import CourseDetail from "./components/Courses/CourseDetail";
import LessonList from "./components/Lessons/LessonList";
import LessonDetail from "./components/Lessons/LessonDetail";
import QuizList from "./components/Quizzes/QuizList";
import QuizDetail from "./components/Quizzes/QuizDetail";

function App() {
  return (
    <Router>
      <div className="md:flex">
        <SideMenu />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/lessons/:id" element={<LessonDetail />} />
              <Route path="/lessons" element={<LessonList />} />
              <Route path="/quizzes/:id" element={<QuizDetail />} />
              <Route path="/quizzes" element={<QuizList />} />

              <Route path="/" element={<CourseList />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
