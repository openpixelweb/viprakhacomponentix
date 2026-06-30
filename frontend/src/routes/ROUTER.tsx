import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';

import ErrorBoundary from '../components/elements/ErrorBoundary';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import DefaultLayout from '../layout/DefaultLayout';
import ErrorPage from '../pages/error-404/ErrorPage';    


const Industries = lazy(() => import('../pages/industries/industries'));
const Careers = lazy(() => import('../pages/careers/Careers'));
const Applynow = lazy(() => import('../pages/careers/ApplyNow'));
const Industrial = lazy(() => import('../pages/project-details/Industrial-Automation-Control-System'));
const Smarthome = lazy(() => import('../pages/project-details/Smart-Home-Automation-Project'));
const EnergyMonitering = lazy(() => import('../pages/project-details/Energy-Monitoring-Power-Management-System'));
const Whyus = lazy(() => import('../pages/whyus/Whyus'));
const Contact = lazy(() => import('../pages/contact/Contact'));

const Products = lazy(() => import('../pages/products/Products'));

const PowerSupplyUnits = lazy(() => import('../pages/Power-Supply-Units/Power-Supply-Units'));
const Industrialsensors = lazy(() => import('../pages/Industrial-Sensors/industrial-sensors'));
const Automationmodules = lazy(() => import('../pages/Automation-Modules/automation-modules'));
const Controlpanels= lazy(() => import('../pages/Control-Panels/control-panels'));
const Printedcircuitboard= lazy(() => import('../pages/Printed-Circuit-Board/printed-circuit-boards'));
const Smarthomecontroller= lazy(() => import('../pages/Smart-Home-Controllers/smart-home-controllers'));
const EnergyMoniteringdevices= lazy(() => import('../pages/Energy-Monitoring-Devices/energy-monitoring-devices'));
const Batteryenergystorage= lazy(() => import('../pages/Battery-Energy-Storage-System/battery-energy-storage-sytem'));
const Iotbaseddevices= lazy(() => import('../pages/IoT-Based-Devices/Iot-based-devices'));
const Smartswitches= lazy(() => import('../pages/Smart-Switches/smart-switches'));
const VoltageStabilizers= lazy(() => import('../pages/Voltage-Stabilizers/voltage-stabilizers'));




const Project = lazy(() => import('../pages/project/Project'));


const About = lazy(() => import('../pages/about/About'));
const HomeOne = lazy(() => import('../home/HomeOne'));


const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <ErrorBoundary name='Root component App'><App /></ErrorBoundary>,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomeOneLayout />,
                children: [
                    {
                        path: "/",
                        element: <ErrorBoundary name='Home One'><SuspenseWrapper><HomeOne /></SuspenseWrapper></ErrorBoundary>
                    },
                
                ]
            },
            
       
            {
                element: <DefaultLayout />,
                children: [
                    {
                        path: "/about",
                        element: <ErrorBoundary name='About'><SuspenseWrapper><About /></SuspenseWrapper></ErrorBoundary>
                    },
                  
                   
                    {
                        path: "/projects",
                        element: <ErrorBoundary name='Project'><SuspenseWrapper><Project /></SuspenseWrapper></ErrorBoundary>
                    },
                  
               
          
               
                 
                    {
                        path: "/Power-Supply-Units",
                        element: <ErrorBoundary name='Power Supply Units'><SuspenseWrapper><PowerSupplyUnits /></SuspenseWrapper></ErrorBoundary>
                    },
                         {
                        path: "/industrial-sensors",
                        element: <ErrorBoundary name='Industrial Sensors'><SuspenseWrapper><Industrialsensors /></SuspenseWrapper></ErrorBoundary>
                    },
                     {
                        path: "/control-panels",
                        element: <ErrorBoundary name='Control Panels'><SuspenseWrapper><Controlpanels /></SuspenseWrapper></ErrorBoundary>
                    },
                      {
                        path: "/smart-home-controllers",
                        element: <ErrorBoundary name='Smart Home Controllers'><SuspenseWrapper><Smarthomecontroller /></SuspenseWrapper></ErrorBoundary>
                    },
                        {
                        path: "/energy-monitoring-devices",
                        element: <ErrorBoundary name='Energy Monitoring Devices'><SuspenseWrapper><EnergyMoniteringdevices /></SuspenseWrapper></ErrorBoundary>
                    },
                       {
                        path: "/IoT-based-devices",
                        element: <ErrorBoundary name='IoT-Based Devices'><SuspenseWrapper><Iotbaseddevices /></SuspenseWrapper></ErrorBoundary>
                    },
                         {
                        path: "/smart-switches",
                        element: <ErrorBoundary name='Smart Switches'><SuspenseWrapper><Smartswitches /></SuspenseWrapper></ErrorBoundary>
                    },
                     {
                        path: "/voltage-stabilizers",
                        element: <ErrorBoundary name='Voltage Stabilizers'><SuspenseWrapper><VoltageStabilizers /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/battery-energy-storage-system",
                        element: <ErrorBoundary name='Battery Energy Storage System'><SuspenseWrapper><Batteryenergystorage /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/printed-circuit-boards",
                        element: <ErrorBoundary name='Printed Circuit Board'><SuspenseWrapper><Printedcircuitboard /></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/automation-modules",
                        element: <ErrorBoundary name='automation modules'><SuspenseWrapper><Automationmodules /></SuspenseWrapper></ErrorBoundary>
                    },
                
                   
                    {
                        path: "/products",
                        element: <ErrorBoundary name='Products'><SuspenseWrapper><Products /></SuspenseWrapper></ErrorBoundary>
                    },
                 
            
                       {
                        path: "/whyus",
                        element: <ErrorBoundary name='Whyus'><SuspenseWrapper><Whyus /></SuspenseWrapper></ErrorBoundary>
                    },
                      {
                        path: "/Industrial-Automation-Control-System",
                        element: <ErrorBoundary name='Industrial Automation Control System'><SuspenseWrapper><Industrial/></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/Smart-Home-Automation-Project",
                        element: <ErrorBoundary name='Smart Home Automation Project'><SuspenseWrapper><Smarthome/></SuspenseWrapper></ErrorBoundary>
                    },
                    {
                        path: "/Energy-Monitoring-Power-Management-System",
                        element: <ErrorBoundary name='Energy Monitoring Power Management System'><SuspenseWrapper><EnergyMonitering/></SuspenseWrapper></ErrorBoundary>
                    },
                      {
                        path: "/industries",
                        element: <ErrorBoundary name='Industries'><SuspenseWrapper><Industries /></SuspenseWrapper></ErrorBoundary>
                    },
                     {
                        path: "/careers",
                        element: <ErrorBoundary name='Careers'><SuspenseWrapper><Careers /></SuspenseWrapper></ErrorBoundary>
                    },
                        {
                        path: "/applynow",
                        element: <ErrorBoundary name='Apply Now'><SuspenseWrapper><Applynow /></SuspenseWrapper></ErrorBoundary>
                    },
                  
                    {
                        path: "/contact",
                        element: <ErrorBoundary name='Contact'><SuspenseWrapper><Contact /></SuspenseWrapper></ErrorBoundary>
                    }
                ]
            },
        ]
    }
])

export default ROUTER;