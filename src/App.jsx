import "./CSS/Reset/index.css";
import "./CSS/GlobalStyles/index.css";
import "./CSS/Root/index.css";
import "./CSS/MediaQueries/index.css";
import MainHeader from "./components/MainHeader";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<p>Introdução</p>} />
        <Route path="/my-projects" element={<p>Meus projetos</p>} />
        <Route path="/about-me" element={<p>Sobre mim</p>} />
      </Routes>
    </BrowserRouter>
  );
}
