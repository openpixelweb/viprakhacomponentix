
export type MenuItem = {
    id: number,
    menuItem: string,
    menuLink: string
}
export const homeList: MenuItem[] = [
    { id: 1, menuItem: "Home One", menuLink: "/" },
    { id: 2, menuItem: "Home Two", menuLink: "/home-two" },
    { id: 3, menuItem: "Home Three", menuLink: "/home-three" },
    { id: 4, menuItem: "Home One Single Page", menuLink: "/single-page-home-one" },
    { id: 5, menuItem: "Home Two Single Page", menuLink: "/single-page-home-two" },
    { id: 6, menuItem: "Home Three Single Page", menuLink: "/single-page-home-three" },
]
export const pagesList: MenuItem[] = [
    { id: 1, menuItem: "Team", menuLink: "/team" },
    { id: 2, menuItem: "Team Details", menuLink: "/team-details" },
    { id: 3, menuItem: "Projects", menuLink: "/projects" },
    { id: 4, menuItem: "Project Details", menuLink: "/project-details" },
    { id: 5, menuItem: "Testimonials", menuLink: "/testimonials" },
    { id: 6, menuItem: "Pricing", menuLink: "/pricing" },
    { id: 7, menuItem: "FAQs", menuLink: "/faqs" },
    { id: 8, menuItem: "404 Error", menuLink: "/404" },
];
export const servicesList: MenuItem[] = [
    { id: 1, menuItem: "Services", menuLink: "/services" },
    { id: 2, menuItem: "maintenance-service", menuLink: "/maintenance-service" },
    { id: 3, menuItem: "Lighting & Fixtures", menuLink: "/lighting-fixtures" },
    { id: 4, menuItem: "Installing a ceiling fan", menuLink: "/installing-ceiling-fan" },
    { id: 5, menuItem: "Commercial services", menuLink: "/commercial-services" },
    { id: 6, menuItem: "Short circuit repair", menuLink: "/short-circuit-repair" },
    { id: 7, menuItem: "Electric Panel Repair", menuLink: "/electric-panel-repair" },
];
export const shopList: MenuItem[] = [
    { id: 1, menuItem: "Power Supply Units", menuLink: "/power-supply-units" },
    { id: 2, menuItem: "Industrial Sensors", menuLink: "/industrial-sensors" },
    { id: 3, menuItem: "Control Panels", menuLink: "/control-panels" },
    { id: 4, menuItem: "Printed Circuit Boards (PCBs)", menuLink: "/printed-circuit-boards" },
    { id: 5, menuItem: "Automation Modules", menuLink: "/Automation-Modules" },
    { id: 6, menuItem: "Smart Home Controllers", menuLink: "" },
    { id: 7, menuItem: "Energy Monitoring Devices", menuLink: "" },
     { id: 8, menuItem: "IoT-Based Devices", menuLink: "" },
      { id: 9, menuItem: "Smart Switches", menuLink: "" },
       { id: 10, menuItem: "Voltage Stabilizers", menuLink: "" },
           { id: 11, menuItem: "Battery Energy Storage System", menuLink: "" },
];
export const blogList: MenuItem[] = [
    { id: 1, menuItem: "Blog", menuLink: "/blog" },
    { id: 2, menuItem: "Blog Standard", menuLink: "/blog-standard" },
    { id: 3, menuItem: "Blog Left Sidebar", menuLink: "/blog-left-sidebar" },
    { id: 4, menuItem: "Blog Right Sidebar", menuLink: "/blog-right-sidebar" },
    { id: 5, menuItem: "Blog Details", menuLink: "/blog-details" },
];