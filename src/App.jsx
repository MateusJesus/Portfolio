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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainHeader />}>
            <Route
              path=":id/*"
              element={
                <>
                  <HomePage />
                  <DetailProject />
                </>
              }
            />
            <Route index element={<HomePage />} />
            <Route path="projects" element={<Projects />} />{" "}
            <Route
              path="projects/:id/"
              element={
                <>
                  <Projects />
                  <DetailProject />
                </>
              }
            />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}
