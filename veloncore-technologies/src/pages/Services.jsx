import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
const services = [
 {number:"01",icon:"⌘",title:"Web Development",description:"Responsive websites, dashboards and full-stack web applications.",path:"/services/web-development"},
 {number:"02",icon:"▣",title:"App Development",description:"Useful applications designed around business needs.",path:"/services/app-development"},
 {number:"03",icon:"✳",title:"UI/UX Design",description:"User research, wireframes and intuitive interfaces.",path:"/services/ui-ux-design"}
];
export function ServicesOverview() { return <div className="service-grid">{services.map(item => <ServiceCard key={item.number} {...item} />)}</div>; }