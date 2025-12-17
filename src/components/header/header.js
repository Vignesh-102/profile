import headerSCSS from './header.module.scss';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

export default function Header() {
  return (
    <header className={headerSCSS.headerContainer}>
      <div className={headerSCSS.leftContent}>
        <span className={headerSCSS.logo}>VIGNESH P</span>
        <span className={headerSCSS.designation}>Software Engineer</span>
      </div>

      {/* <div className={headerSCSS.rightContent}>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <SiGithub className={headerSCSS.icon} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className={headerSCSS.icon} />
        </a>
        <a href="mailto:your.email@example.com">
          <SiGmail className={headerSCSS.icon} />
        </a>
      </div> */}
    </header>
  );
}
