import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="sec">
      <main className="About-sec">
        <div>
          <h1 style={{ color: "rgb(39, 52, 82)", textAlign: "center" }}>
            About
          </h1>
        </div>
        <p style={{ fontSize: "15px", padding: "10px", textOverflow:"ellipsis" }}>
          Welcome to my portfolio page, where I showcase my latest project using
          a free quotes API from Codecademy. My name is Lesley and I am a
          developer with a passion for creating beautiful and functional
          websites. The app I built using the Codecademy API is a quote
          generator that displays a random quote on the screen on the click of a
          button. The app also includes an email service from the EmailJS free
          API, which allows users to send an email to me with their feedback or
          any questions they may have. I am always looking for opportunities to
          improve my skills and to work with other developers. If you are
          impressed by my work, please feel free to contact me by clicking on
          the contact button. I would love to hear your feedback, or if you're
          interested in working with me. Thank you for visiting!
        </p>
        <p style={{ padding: "2px", textAlign: "center" }}>
          <em style={{ padding: "2px", textAlign: "center" }}>
            <b>
              <i>
                Here are a few technologies I’ve been working with recently:
              </i>
            </b>
          </em>
          <ol className="ordered-list">
            <li>
              <label for="html">HTML</label>
              <progress id="html" min="0" max="100" value="90"></progress>
            </li>
            <li>
              <label for="css">CSS</label>
              <progress id="css" min="0" max="100" value="90"></progress>
            </li>
            <li>
              <label for="vue">VueJs</label>
              <progress id="vue" min="0" max="100" value="60"></progress>
            </li>
            <li>
              <label for="sql">SQL</label>
              <progress id="sql" min="0" max="100" value="80"></progress>
            </li>
            <li>
              <label for="js">JavaScript</label>
              <progress id="js" min="0" max="100" value="60"></progress>
            </li>
            <li>
              <label for="react">ReactJs</label>
              <progress id="react" min="0" max="100" value="70"></progress>
            </li>
          </ol>
        </p>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
