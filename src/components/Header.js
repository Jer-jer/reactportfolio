import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

//Custom Imports
import Hamburger from "./Hamburger";
import arrowdown from "../images/icons/down-arrow.png";
import arrowup from "../images/icons/upload.png"

import "../styles/header.scss";

const Header = ({ history }) => {
  //State for Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuIcon: arrowup,
  });

  //Disable ButtonState
  const [disabled, setDisabled] = useState(false);

  //For page changes
  useEffect(() => {
    //listen page changes
    history.listen(() => {
      setState({ clicked: false, menuIcon: arrowup });
    });
  });

  //Handling Menu
  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuIcon: arrowdown,
      });
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuIcon: arrowup,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuIcon: arrowdown,
      });
    }
  };

  //To disabled menu button everytime menu is clicked
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">Jer</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                <img src={state.menuIcon} alt="Menu" width="30" height="30"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
