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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}
