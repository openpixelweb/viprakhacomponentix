import React from "react";
import { Link } from "react-router";

import projectDetailsImg2 from "../../assets/images/project/smarthome.jpg";
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
        text: "The Smart Home Automation Project was developed to create a connected, intelligent, and energy-efficient living environment through advanced electronic systems and IoT-based technologies. This project integrates smart controllers, automation modules, energy monitoring devices, and intelligent switching systems to provide seamless control over household operations.Designed for convenience, security, and modern living, the system enables users to remotely monitor and manage home appliances, lighting, energy consumption, and connected devices through smart automation technology.",
    },
    {
        title: "Objectives of the Project",
     text:"The objective of this project was to develop a reliable and user-friendly smart home automation system that enhances comfort, improves energy efficiency, and provides intelligent control over household devices and electronic systems."
    },
    {
        title: "Project Outcome",
        text: "The Smart Home Automation Project successfully delivered a connected and intelligent living solution that improved convenience, energy management, and smart device control. The project demonstrates how industrial electronic technologies can be adapted for modern household applications and smart living environments.",
    },
];

const technologies = [
    "Smart Home Controllers",
    "IoT-Based Devices",
    "Smart Switches",
    "Energy Monitoring Devices",
    "Printed Circuit Boards (PCBs)",
    "Automation Modules",
    "Voltage Stabilizers",
];
const objectpoints: ResultPoint[] = [
    { id: 1, text: "Automate household electrical and electronic systems" },
    { id: 2, text: "Improve convenience and user comfort" },
    { id: 3, text: "Enable remote access and smart device control" },
    { id: 4, text: "Optimize household energy consumption" },
    { id: 5, text: "Enhance home security and monitoring" },
    { id: 6, text: "Support modern IoT-based smart living technologies" },
];

const keyFeatures = [
    {
        title: "Smart Device Control",
        text: "Enable remote and centralized control of home appliances, lighting, and connected devices.",
    },
    {
        title: "IoT-Based Connectivity",
        text: "Integrated IoT technology for real-time communication and smart device interaction.",
    },
    {
        title: "Energy Monitoring System",
        text: "Track and optimize electricity usage through intelligent energy monitoring devices.",
    },
    {
        title: "Smart Switching Solutions",
        text: "Advanced smart switches for automated and efficient electrical control.",
    },
     {
        title: "Security & Safety",
        text: "Enhanced home safety through intelligent monitoring and automation systems.",
    },
     {
        title: "User-Friendly Automation",
        text: "Easy-to-use automation controls designed for convenient and modern living.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Smarthome: React.FC = () => {
    const [overview, challenge, result] = projectSections;

    return (
        <>
            <Banner title="Smart Home Automation Project" subTitle="Smart Home Automation Project" />
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
                                    <img src={projectDetailsImg2} alt="industrial automation system" />
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
                                            <Link to="/Industrial-Automation-Control-System" aria-label="Previous project icon">
                                                <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        <div className="text-box">
                                            <Link to="/Industrial-Automation-Control-System">Previous Project</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="text-box">
                                            <Link to="/energy-Monitoring-Power-Management-System">Next Project</Link>
                                        </div>
                                        <div className="icon">
                                            <Link to="/energy-Monitoring-Power-Management-System" aria-label="Next project icon">
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

export default Smarthome;