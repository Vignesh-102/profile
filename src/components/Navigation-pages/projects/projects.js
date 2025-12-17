import ProjectsSCSS from "./projects.module.scss";

export default function Projects() {
  return (
    <>
      <div className={ProjectsSCSS.heading}>Projects</div>

      <div className={ProjectsSCSS.grid}>
        {/* Form Builder (Angular) */}
        <div className={ProjectsSCSS.card}>
          <div className={ProjectsSCSS.title}>Form Builder (Angular)</div>
          <div className={ProjectsSCSS.buttons}>
            <a className={ProjectsSCSS.btnPrimary} href="https://vignesh-102.github.io/form-builder-app/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a className={ProjectsSCSS.btnSecondary} href="https://github.com/Vignesh-102/form-builder-app" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        {/* Ride – Spring Boot */}
        <div className={ProjectsSCSS.card}>
          <div className={ProjectsSCSS.title}>Ride – Spring Boot Microservices</div>
          <div className={ProjectsSCSS.buttons}>
            <a className={ProjectsSCSS.btnSecondary} href="https://github.com/orgs/ride-hailing-backend/repositories" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        {/* E-commerce React */}
        <div className={ProjectsSCSS.card}>
          <div className={ProjectsSCSS.title}>E-commerce (React)</div>
          <div className={ProjectsSCSS.buttons}>
            <a className={ProjectsSCSS.btnPrimary} href="https://vignesh-102.github.io/ecommerce-app/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a className={ProjectsSCSS.btnSecondary} href="https://github.com/Vignesh-102/ecommerce-app" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
