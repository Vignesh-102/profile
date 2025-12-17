import './App.css';
import Header from "./components/header/header"

import Navigation from "./components/page-navigation/navigation";
import {
  Route,
  Routes,
} from "react-router-dom";
import HomeContentDescription from './components/Navigation-pages/home-content-description/home-content-description';
import Experience from './components/Navigation-pages/experience/experience';
import { Helmet } from 'react-helmet';
import NoMatch from './components/no-match/no-match';
import ExperienceTCS from './components/Navigation-pages/experience/TCS-experience';
import ExperienceInfosys from './components/Navigation-pages/experience/Infosys-experience';
import Education from './components/Navigation-pages/Education/education';
import Skills from './components/Navigation-pages/Skills/skills';
import Projects from './components/Navigation-pages/projects/projects';


function App() {
  return (
    <>
      <Helmet>
        <title>Vignesh Profile</title>
      </Helmet>
      <div className="page-container">
        <Header />

        {/* Always show Navigation */}
        <Navigation />

        {/* Main content changes based on route */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomeContentDescription />} />
            <Route path="/experience" element={<Experience />}>
              <Route path="TCS" element={<ExperienceTCS />} />
              <Route path="Infosys" element={<ExperienceInfosys />} />
            </Route>
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

export default App;

