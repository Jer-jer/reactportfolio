import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

//Custom Imports
import {
  staggerReveal,
  staggerText,
  fadeInUp,
} from "./Animations";
import { handleHover, handleHoverOut } from "./Animations";

import amboys from "../images/amboys.PNG";
import portraits from "../images/portraitsbybukool.PNG";
import quests from "../images/quests.PNG";
import uaa from "../images/uaa.png";

const projects = [
  { name: "Amboy's RIC System", image: amboys },
  { name: "Portraits By Bukool", image: portraits },
  { name: "Quests Web Application", image: quests },
  { name: "USC All Access Portal", image: uaa },
];

const Hamburger = ({ state }) => {
  // Variables for animated DOM
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBG = useRef(null);
  let projectBG = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //Menu is closed
      // menu.style.display = "none";
      gsap.to([revealMenu, revealMenuBG], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //Menu is opened
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBG, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBG, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  const handleProject = (project) => {
    gsap.to(projectBG, {
      duration: 0,
      background: `url(${project}) center center`,
    });
  
    gsap.to(projectBG, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
  
    gsap.from(projectBG, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };
  
  const handleProjectOut = () => {
    gsap.to(projectBG, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBG = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (projectBG = el)}
          className="menu-project-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverOut(e)}
                      ref={(el) => (line1 = el)}
                      to="/tech_stack"
                    >
                      Tech Stack
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverOut(e)}
                      ref={(el) => (line2 = el)}
                      to="/work_experiences"
                    >
                      Work Experiences
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverOut(e)}
                      ref={(el) => (line3 = el)}
                      to="/testimonies"
                    >
                      Testimonies
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverOut(e)}
                      ref={(el) => (line4 = el)}
                      to="/contact-us"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>About Me</h3>
                <p>
                  I am Allan Jericho Bargamento, a student from University of
                  San Carlos and currently doing internship in Touch-Fire
                  Trading Company. A future web programmer studying to be
                  competitive in both front-end and back-end technologies. To
                  know about my personnal information, download my résumé here.
                </p>{" "}
                {/* 'here' contains a link to my resume */}
              </div>
              <div className="locations">
                Projects:
                {projects.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleProject(el.image)}
                    onMouseOut={handleProjectOut}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
