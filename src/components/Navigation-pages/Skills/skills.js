import skillsSCSS from './skills.module.scss'
export default function Skills() {
    return (
        <div className={skillsSCSS.skillsSection}>
            <div className={skillsSCSS.category}>
                <div className={skillsSCSS.heading}>Frontend</div>
                <ul>
                    <li>Angular</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>RxJS</li>
                    <li>Redux Toolkit</li>
                </ul>
            </div>

            <div className={skillsSCSS.category}>
                <div className={skillsSCSS.heading}>Backend</div>
                <ul>
                    <li>Spring Boot</li>
                    <li>Spring Security</li>
                    <li>Microservices</li>
                    <li>WebClient</li>
                    <li>Kafka</li>
                </ul>
            </div>

            <div className={skillsSCSS.category}>
                <div className={skillsSCSS.heading}>Database</div>
                <ul>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>

            <div className={skillsSCSS.category}>
                <div className={skillsSCSS.heading}>DevOps</div>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Docker (Basics)</li>
                    <li>CI/CD (Fundamentals)</li>
                </ul>
            </div>
        </div>


    )
}