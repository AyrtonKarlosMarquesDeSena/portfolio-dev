import React from "react";
import Header from "./components/header/Header";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Projetos from './components/projeto/Projetos';
import Sobre from "./components/sobre/Sobre";
import Footer from "./components/footer/Footer";
import { BsJavascript } from "react-icons/bs";
import { FaCss } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode, FaReact, FaHtml5 } from "react-icons/fa";
import profileImg from "./assets/profileImg.jpg";
import listDrivers from "./assets/list-drivers.png";
import cronometro from "./assets/Cronometro.png";


function App() {
  const skills = [
    <BsJavascript />,
    <RiTailwindCssFill />,
    <FaNode />,
    <FaReact />,
    <FaCss />,
    <FaHtml5 />,
  ];

  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project"  element={<Projetos />}/>
          <Route path="/about" element={<Sobre />} />
          <Route
            path="/profile"
            element={
              <Profile
                avatar={profileImg}
                name="Ayrton Sena"
                bio="Desenvolvedor FullStack"
                skills={skills}
                phone="+5591982467602"
                email="ayrtonsenna1432@gmail.com"
                githubUrl="https://github.com/AyrtonKarlosMarquesDeSena/"
                instagram="https://instagram.com/ayrton.senaa"
                linkedinUrl="https://www.linkedin.com/in/ayrton-sena-0a1b5a349"
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
