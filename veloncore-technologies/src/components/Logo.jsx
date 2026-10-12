import React from "react";
import { Link } from "react-router-dom";
export default function Logo() {
  return <Link to="/" className="brand" aria-label="Veloncore Technologies home"><span className="brand-icon">V</span><span>Veloncore<small>TECHNOLOGIES</small></span></Link>;
}