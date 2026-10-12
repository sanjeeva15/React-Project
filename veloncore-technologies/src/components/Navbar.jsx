import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
const links = [{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Services",path:"/services"},{label:"Products",path:"/products"},{label:"Insights",path:"/insights"},{label:"Admin",path:"/admin"}];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="container nav-inner"><Logo />
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? "✕" : "☰"}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>{links.map(link => <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={() => setOpen(false)}>{link.label}</NavLink>)}<NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>Let's Talk ↗</NavLink></nav>
  </div></header>;
}