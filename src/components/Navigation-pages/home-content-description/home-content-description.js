import { ReactTyped } from "react-typed";
import HeroSCSS from './home-content-description.module.scss';
import { useNavigate } from "react-router-dom";


export default function HomeContentDescription() {
  const navigate = useNavigate();
  return (
    <div className={HeroSCSS.heroContainer}>
      <h1 className={HeroSCSS.heroTitle}>Building high-performance applications with modern full-stack engineering</h1>
      <h2 className={HeroSCSS.heroSubtitle}>
        <ReactTyped
          strings={[
            "Full Stack Developer",
            "Angular • React • Spring Boot",
            "MongoDB • PostgreSQL",
          ]}
          typeSpeed={55}
          backSpeed={35}
          loop
        />
      </h2>
      <p className={HeroSCSS.heroDescription}>
        Full Stack Developer with 5+ years of experience building scalable, production-grade applications using Angular as the primary front-end framework, complemented by hands-on experience in React and Spring Boot. 
        Adept at developing clean, maintainable code, optimizing performance, and contributing across the full SDLC. Seeking to leverage strong UI engineering expertise and expanding full-stack capabilities to deliver high-quality, enterprise solutions.
      </p>
      <div className={HeroSCSS.heroButtons}>
        <button className={`${HeroSCSS.heroBtn} ${HeroSCSS.primary}`} onClick={() => navigate("/projects")}>View Projects</button>
        <a
          href={`${process.env.PUBLIC_URL}/VIGNESH-resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${HeroSCSS.heroBtn} ${HeroSCSS.secondary}`}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
