import React from "react";

//Custom Imports
import "../App.scss";
import "../styles/techstack.scss";

import html from "../images/icons/tech stack/html5-logo-vector.svg";
import sass from "../images/icons/tech stack/node-sass-logo-vector.svg";
import javascript from "../images/icons/tech stack/javascript-logo-vector.svg";
import react from "../images/icons/tech stack/react-logo-vector.svg";
import vue from "../images/icons/tech stack/vue-logo-vector.svg";
import node from "../images/icons/tech stack/nodejs-logo-vector.svg";
import php from "../images/icons/tech stack/php-logo-vector-1.svg";
import laravel from "../images/icons/tech stack/laravel-logo-vector-1.svg";
import mysql from "../images/icons/tech stack/mysql-logo-vector-1.svg";

export default function TechStack() {
  return (
    <div className="tech-stack">
      <p>The Technology Stack</p>
      <div className="tech-stack-content">
        <img src={html} alt="HTML5" height="120" width="120" />
        <img src={sass} alt="Sass/SCSS" height="120" width="120" />
        <img src={javascript} alt="Javascript" height="120" width="120" />
        <img src={react} alt="React" height="120" width="120" />
        <img src={vue} alt="Vue" height="120" width="120" />
        <img src={node} alt="NodeJS" height="120" width="120" />
        <img src={php} alt="PHP" height="120" width="120" />
        <img src={laravel} alt="Laravel" height="120" width="120" />
        <img src={mysql} alt="mysql" height="120" width="120" />
      </div>
    </div>
  );
}
