
export type MenuItem = {
    id: number,
    menuItem: string,
    menuLink: string
}
export const homeList: MenuItem[] = [
    { id: 1, menuItem: "Home One", menuLink: "/" },

]
export const pagesList: MenuItem[] = [
  
    { id: 1, menuItem: "Projects", menuLink: "/projects" },

    { id: 2, menuItem: "404 Error", menuLink: "/404" },
];

export const productList: MenuItem[] = [
    { id: 1, menuItem: "Power Supply Units", menuLink: "/power-supply-units" },
    { id: 2, menuItem: "Industrial Sensors", menuLink: "/industrial-sensors" },
    { id: 3, menuItem: "Control Panels", menuLink: "/control-panels" },
    { id: 4, menuItem: "Printed Circuit Boards (PCBs)", menuLink: "/printed-circuit-boards" },
    { id: 5, menuItem: "Automation Modules", menuLink: "/Automation-Modules" },
    { id: 6, menuItem: "Smart Home Controllers", menuLink: "/smart-home-controllers" },
    { id: 7, menuItem: "Energy Monitoring Devices", menuLink: "/energy-monitoring-devices" },
     { id: 8, menuItem: "IoT-Based Devices", menuLink: "/ioT-based-devices" },
      { id: 9, menuItem: "Smart Switches", menuLink: "/smart-switches" },
       { id: 10, menuItem: "Voltage Stabilizers", menuLink: "/voltage-stabilizers" },
           { id: 11, menuItem: "Battery Energy Storage System", menuLink: "/battery-energy-storage-system" },
];
