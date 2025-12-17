import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>Experience</NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? styles.active : ''}>Skills</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Personal Projects</NavLink>
      <NavLink to="/education" className={({ isActive }) => isActive ? styles.active : ''}>Education</NavLink>
    </nav>
  );
}
