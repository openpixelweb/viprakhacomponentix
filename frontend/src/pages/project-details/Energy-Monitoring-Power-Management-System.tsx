import React from "react";
import { Link } from "react-router";

import projectDetailsImg3 from "../../assets/images/project/energymonetering.jpg";
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
        text: "The Energy Monitoring & Power Management System project was developed to help industries, commercial facilities, and residential environments efficiently monitor, control, and optimize energy consumption. The system integrates advanced electronic components, smart monitoring technologies, and intelligent power management solutions to improve energy efficiency and operational reliability.This project enables real-time tracking of electrical usage, voltage conditions, and power performance, helping users reduce energy wastage, lower operational costs, and maintain stable electrical systems.",
    },
    {
        title: "Objectives of the Project",
     text:"The primary objective of this project was to create an intelligent energy management system capable of monitoring power consumption, analyzing energy usage patterns, and improving electrical efficiency through smart electronic technologies."
    },
    {
        title: "Project Outcome",
        text: "The Smart Home Automation Project successfully delivered a connected and intelligent living solution that improved convenience, energy management, and smart device control. The project demonstrates how industrial electronic technologies can be adapted for modern household applications and smart living environments.",
    },
];

const technologies = [
    "Energy Monitoring Devices",
    "Voltage Stabilizers",
    "Smart Control Systems",
    "IoT-Based Devices",
    "Printed Circuit Boards (PCBs)",
    "Power Supply Units",
    "Automation Modules",
];
const objectpoints: ResultPoint[] = [
    { id: 1, text: "Monitor real-time energy consumption" },
    { id: 2, text: "Improve power efficiency and energy management" },
    { id: 3, text: "Reduce electricity wastage and operational costs" },
    { id: 4, text: "Protect systems from voltage fluctuations" },
    { id: 5, text: "Enable intelligent monitoring and reporting" },
    { id: 6, text: "Support smart and sustainable energy solutions" },
];

const keyFeatures = [
    {
        title: "Real-Time Energy Monitoring",
        text: "Tracks energy consumption, voltage levels, current flow, and power usage continuously for accurate monitoring and analysis.",
    },
    {
        title: "Intelligent Power Management",
        text: "Optimizes electrical power distribution and usage for improved operational efficiency.",
    },
    {
        title: "Voltage Protection System",
        text: "Integrated voltage stabilizers protect electrical equipment and devices from voltage fluctuations and power instability.",
    },
    {
        title: "IoT-Based Remote Monitoring",
        text: "Users can remotely access and monitor energy data through connected IoT technologies.",
    },
     {
        title: "Automated Alerts & Notifications",
        text: "The system detects abnormal power conditions and sends alerts for quick response and preventive maintenance.",
    },
     {
        title: "Energy Usage Analytics",
        text: "Provides energy consumption insights and reports to support better decision-making and power optimization.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EnergyMonitering: React.FC = () => {
    const [overview, challenge, result] = projectSections;

    return (
        <>
            <Banner title="Energy Monitoring & Power Management System" subTitle="Energy Monitoring & Power Management System" />
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
                                    <img src={projectDetailsImg3} alt="industrial automation system" />
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
                                            <Link to="/smart-Home-Automation-Project" aria-label="Previous project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <Link to="/smart-Home-Automation-Project">Previous Project</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-box">
                                            <Link to="/Industrial-Automation-Control-System">Next Project</Link>
                                        </div>
                                        <div className="icon">
                                            <Link to="/Industrial-Automation-Control-System" aria-label="Next project icon">
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

export default EnergyMonitering;