import "./CSS/Reset/index.css";
import "./CSS/GlobalStyles/index.css";
import "./CSS/Root/index.css";
import "./CSS/MediaQueries/index.css";
import MainHeader from "./components/MainHeader";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import MainFooter from "./components/MainFooter";
import DetailProject from "./pages/DetailProject";
import ContactMe from "./pages/ContactMe";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route
          path="proj/:id/*"
          element={
            <>
              <HomePage />
              <DetailProject />
            </>
          }
        />
        <Route
          path="projects/proj/:id/*"
          element={
            <>
              <Projects />
              <DetailProject />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <HomePage />
              <ContactMe />
            </>
          }
        />
        <Route
          path="projects/contact"
          element={
            <>
              <Projects />
              <ContactMe />
            </>
          }
        />
        <Route
          path="about-me/contact"
          element={
            <>
              <AboutMe />
              <ContactMe />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
}
