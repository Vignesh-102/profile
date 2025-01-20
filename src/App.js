import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import Navigation from "./components/page-navigation/navigation";
import {
  Route,
  Routes,
} from "react-router-dom";
import HomeContentDescription from './components/Navigation-pages/home-content-description/home-content-description';
import Experience from './components/Navigation-pages/experience/experience';
import { Helmet } from 'react-helmet';
import React from 'react';
import NoMatch from './components/no-match/no-match';
import ExperienceTCS from './components/Navigation-pages/experience/TCS-experience';
import ExperienceInfosys from './components/Navigation-pages/experience/Infosys-experience';
import Education from './components/Navigation-pages/Education/education';
import Skills from './components/Navigation-pages/Skills/skills';





function App() {
  return (
    <>
      <Helmet>
        <title>Vignesh Profile</title>
      </Helmet>
      <div className="page-container">
        <div className="header">
          <Header></Header>
        </div>
        <div className='home-content-container '>
          <div className="navigation-container">
            <Navigation></Navigation>
          </div>
          <div className='objective'>
            <Routes>
              <Route path='/' element={<HomeContentDescription />}></Route>
              <Route path='/experience' element={<Experience />}>
                <Route path='TCS' element={<ExperienceTCS />}></Route>
                <Route path='Infosys' element={<ExperienceInfosys />}></Route>
              </Route>
              <Route path='/skills' element={<Skills />}></Route>
              <Route path='/education' element={<Education />}></Route>
              <Route path='*' element={<NoMatch />}></Route>
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
