import React from "react";
import { Link } from "react-router";

import projectDetailsImg1 from "../../assets/images/project/industrialautomationcontrol.jpg";
// import projectDetailsTextImg from "../../assets/images/project/project-details-text-img.jpg";
// import projectDetailsPointsImg from "../../assets/images/project/project-details-points-img.jpg";
import FooterOne from "../../components/footers/FooterOne";
import Banner from "../../features/banner/Banner";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectSection {
    title: string;
    text: string;
}

interface ResultPoint {
    id: number;
    text: string;
}



// ─── Data ─────────────────────────────────────────────────────────────────────

const projectSections: ProjectSection[] = [
    {
        title: "Project Overview",
        text: "The Industrial Automation Control System project was developed to improve operational efficiency, machine control, and process automation for modern industrial environments. The system integrates advanced electronic technologies, intelligent monitoring, and automated control solutions to optimize industrial operations with greater accuracy, safety, and reliability.This project was designed to reduce manual intervention, increase productivity, and provide real-time monitoring and control for industrial equipment and processes.",
    },
    {
        title: "Objectives of the Project",
     text:"The primary objective of this project was to develop a smart and reliable automation control system capable of managing industrial machinery, monitoring operational processes, and improving overall production efficiency through intelligent electronic integration."
    },
    {
        title: "Project Outcome",
        text: "The Industrial Automation Control System successfully improved industrial efficiency, operational reliability, and automation capabilities. The project helped create a smarter, safer, and more energy-efficient industrial environment through advanced electronic technologies and intelligent control systems.",
    },
];

const technologies = [
    "Power Supply Units",
    "Industrial Sensors",
    "Control Panels",
    "Printed Circuit Boards",
    "Automation Modules",
    "IoT-Based Monitoring Systems",
    "Smart Power Management Solutions",
];
const objectpoints: ResultPoint[] = [
    { id: 1, text: "Automate industrial operations and processes" },
    { id: 2, text: "Improve production efficiency and accuracy" },
    { id: 3, text: "Reduce human error and manual monitoring" },
    { id: 4, text: "Enable real-time system monitoring and control" },
    { id: 5, text: "Enhance operational safety and reliability" },
    { id: 6, text: "Support smart industrial infrastructure and Industry 4.0 technologies" },
];

const keyFeatures = [
    {
        title: "Smart Automation Control",
        text: "Advanced automation modules for efficient machine and process control.",
    },
    {
        title: "Real-Time Monitoring",
        text: "Continuous monitoring of industrial operations for better accuracy and performance.",
    },
    {
        title: "Intelligent Control Panels",
        text: "Centralized control systems for managing industrial equipment and workflows.",
    },
    {
        title: "Industrial Sensors Integration",
        text: "High-precision sensors for monitoring temperature, pressure, motion, and system conditions.",
    },
     {
        title: "Energy Efficiency",
        text: "Optimized power management solutions to reduce energy consumption and operational costs.",
    },
     {
        title: "Safety & Reliability",
        text: "Enhanced safety mechanisms and stable system performance for industrial environments.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Industrial: React.FC = () => {
    const [overview, challenge, result] = projectSections;

    return (
        <>
            <Banner title="Industrial Automation Control System" subTitle="Industrial Automation Control System" />
            <section className="project-details">
                <div className="container">
                    <div className="row">

                        {/* ── Left Column ── */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="project-details__left">

                                {/* Overview */}
                                <h3 className="project-details__title-1">{overview.title}</h3>
                                <p className="project-details__text-1">{overview.text}</p>

                                {/* Challenge */}
                                <h3 className="project-details__title-2">{challenge.title}</h3>
                                <p className="project-details__text-2 mb-3">{challenge.text}</p>
                                  <ul className="project-details__points list-unstyled mb-2">
                                        {objectpoints.map((point) => (
                                            <li key={point.id}>
                                                <div className="icon">
                                                    <span className="icon-arrow-right"></span>
                                                </div>
                                                <p>{point.text}</p>
                                            </li>
                                        ))}
                                    </ul>

                      <div className="key-features-section">
    <h2 className="key-features-section__heading">
       Key Features
    </h2>

    <div className="row g-4">
        {keyFeatures.map((feature, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                <div className="key-features-section__card">
                    <h3 className="key-features-section__title">
                        {feature.title}
                    </h3>

                    <p className="key-features-section__text">
                        {feature.text}
                    </p>
                </div>
            </div>
        ))}
    </div>
</div>

                                {/* Result */}
                                <h3 className="project-details__title-3">{result.title}</h3>
                                <p className="project-details__text-4">{result.text}</p>

                              

                            </div>
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="project-details__sidebar">

                                {/* Project Information */}
                      
 <div className="project-details__img mb-3">
                                    <img src={projectDetailsImg1} alt="industrial automation system" />
                                </div>
                                <div className="technology-section">
    <div className="technology-section__title-box">
        <span className="technology-section__line"></span>

        <h3 className="technology-section__title">
            Technologies Used
        </h3>
    </div>

    <div className="technology-section__tags">
        {technologies.map((tech, index) => (
            <span key={index} className="technology-section__tag">
                {tech}
            </span>
        ))}
    </div>
</div>

                                {/* Get Started */}
                

                            </div>
                        </div>
                    </div>

                    {/* ── Previous / Next Navigation ── */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="project-details__previous-next">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <Link to="/energy-Monitoring-Power-Management-System" aria-label="Previous project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <Link to="/energy-Monitoring-Power-Management-System">Previous Project</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-box">
                                            <Link to="/smart-Home-Automation-Project">Next Project</Link>
                                        </div>
                                        <div className="icon">
                                            <Link to="/smart-Home-Automation-Project" aria-label="Next project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <FooterOne />
        </>
    );
};

export default Industrial;