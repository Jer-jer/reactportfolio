import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";

//Custom Imports
import TechStack from "./components/TechStack";
import photo from "../src/images/profpic.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tech_stack" component={TechStack} />
                <Route exact path="/work_experiences" component={WorkExperiences} />
                <Route exact path="/testimonies" component={Testimonies} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function WorkExperiences() {
  return <p>Solutions that help you.</p>;
}

function Testimonies() {
  return <p>Feel free to reach us.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper home_content">
        <h5>
          Welcome to my <b>PORTFOLIO</b>
          <br />I am <b>ALLAN JERICHO BARGAMENTO</b>.
          <br />
          This portfolio contains my projects, tech stack, work experiences,
          testimonies and my contacts.
          <br />
          Hope you enjoy your stay!
        </h5>
        <ReactRoundedImage image={photo} roundedColor="#191919" roundedSize="9" hoverColor="#53017b" imageWidth="300" imageHeight="300" />
      </div>
    </div>
  );
}
export default App;
