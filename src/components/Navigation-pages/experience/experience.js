import { NavLink, Outlet } from 'react-router-dom'
import experienceSCSS from './experience.module.scss'
import { useState } from 'react'
export default function Experience() {
    const [experience, setExperience] = useState([
        {
            companyName: 'Infosys',
            duration: 'April 2023 - Present',
            role: 'Senior Software Engineer',
            descriptions: [
                'Worked in a Microfrontend Angular applications and implemented the UI as per the Invision Design',
                'Utilizing the Angular framework and provide an efficient Application as per the requirement and delivering on time to the clients',
                'Will always make sure the code coverage for the pushed code is always above 80%',
                'Will push the code without lint errors and will update the application as per SonarQube suggestions to improve efficency of the code as well as to ensure an bug free application'
            ]
        },
        {
            companyName: 'TCS',
            duration: 'January 2021 - March 2023',
            role: 'Associate System Engineer',
            descriptions: [
                'Worked in a migration project from legacy Angular JS to latest versions, where the documentation is not available',
                'Had implemented the UI with the client provided CSS modules and acheived the same look as the running applications',
                'Implemented complex forms using Angular FormArray and had written helper functions to handle custom validations',
                'Handled API requests to get the data and mapped the data as user friendly and provided to the compopnent'

            ]
        }
    ]);
    return (
        <div>
            {experience.map((company) => {
                return(
                    <>
                    <div className={experienceSCSS.header}>
                        <div className={experienceSCSS.companyName}>{company.companyName}</div>
                        <div className={experienceSCSS.duration}>{company.duration}</div>
                    </div>
                    <div className={experienceSCSS.role}>{company.role}</div>
                    <ul className={experienceSCSS.description}>
                        {company.descriptions?.map((describtion) => {
                            return(
                                <>
                                  <li>{describtion}</li>
                                </>
                            )
                        })}
                    </ul>
                </>
                )
                
            })}
        </div>
    )
};