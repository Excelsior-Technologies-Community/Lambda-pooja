import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import ImageGallery from "./pages/imageGallery";
import Faq from "./pages/faq";
import Login from "./pages/login";
import AllCourses from "./pages/all_Courses";
import CourseDetails from "./pages/course_details";
import Typography from "./pages/typography";
import ThemeCore from "./pages/theme_core";

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all_Courses" element={<AllCourses />} />
        <Route path="/sample-course" element={<CourseDetails />} />
        <Route path="/course_details" element={<CourseDetails />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/theme_core" element={<ThemeCore />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
