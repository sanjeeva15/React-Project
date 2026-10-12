import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){return <section className="section container empty-state"><span className="eyebrow">404 ERROR</span><h1>Page not found</h1><p>The page you are looking for may have moved or no longer exists.</p><Link to="/" className="btn btn-primary">Return home</Link></section>; }