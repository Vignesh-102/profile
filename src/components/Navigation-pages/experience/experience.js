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
                "Led development of major Angular application modules, delivering reusable components, Web Components for Magnolia CMS integration, and scalable front-end architecture.",
                "Built and enhanced Spring Boot microservices for production use, including REST APIs, service-to-service communication, GraphQL integrations, and database-layer workflows.",
                "Practiced microservices architecture by implementing modular backend services, API contracts, WebSocket event flows, and end-to-end communication across distributed systems.",
                "Expanded front-end capabilities by building React components and features using modern React patterns, TypeScript, and practical GraphQL/REST consumption.",
                "Collaborated with frontend, backend, and CMS teams to deliver end-to-end features, resolve integration challenges, and ensure seamless production deployments."
            ]
        },
        {
            companyName: 'TCS',
            duration: 'January 2021 - March 2023',
            role: 'Associate System Engineer',
            descriptions: [
                "Developed and maintained core Angular features using component-driven architecture, reusable modules, RxJS streams, and clean TypeScript design patterns.",
                "Migrated legacy AngularJS screens to modern Angular by rebuilding UI modules from scratch and replicating exact behaviors without existing documentation.",
                "Implemented complex reactive forms with FormArray, custom validators, and helper utilities to ensure robust form logic and edge-case handling.",
                "Integrated REST APIs, transformed raw backend responses into user-friendly structures, and optimized data flow through service and interceptor patterns.",
                "Delivered pixel-perfect UI using precise HTML/CSS/SASS based on client-provided styles, ensuring full visual parity with legacy applications.",
                "Collaborated with backend, QA, and product teams to refine technical requirements, resolve defects, and enhance UX across new and migrated modules."
            ]
        }
    ]);
    return (
        <div>
            {experience.map((company) => {
                return (
                    <>
                        <div className={experienceSCSS.header}>
                            <div className={experienceSCSS.companyName}>{company.companyName}</div>
                            <div className={experienceSCSS.duration}>{company.duration}</div>
                        </div>
                        <div className={experienceSCSS.role}>{company.role}</div>
                        <ul className={experienceSCSS.description}>
                            {company.descriptions?.map((describtion) => {
                                return (
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