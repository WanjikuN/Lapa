import React from "react";
const AboutUsMain = () => {
  return (
    <div id="our-cause">
      <h1 id="title">About Us</h1>
      <div className="card-container">
        {/* Top Row: Titles */}
        <div className="card card-title mission-title">
          <h2>Mission</h2>
        </div>
        <div className="card card-title vision-title">
          <h2>Vision</h2>
        </div>
        <div className="card card-title values-title">
          <h2>Values</h2>
        </div>

        {/* Bottom Row: Content */}
        <div className="card card-content mission-content">
          <p>
            To promote animal welfare and
            environmental sustainability through legal advocacy and
            collaboration.{" "}
          </p>
        </div>
        <div className="card card-content vision-content">
          <ul>
            <li>
              Animals are treated with compassion and protected from harm.
            </li>
            <li>Wildlife thrives in healthy ecosystems alongside humans.</li>
            <li>
              Laws are used to ensure justice for animals and the environment.
            </li>
            <li>
              Sustainable food systems offer safe, nutritious food while
              preserving the environment.
            </li>
          </ul>
        </div>
        <div className="card card-content values-content">
         
          <ul>
            <li>Empowering communities with legal tools.</li>
            <li>Driving advocacy with research.</li>
            <li>Innovating legal strategies.</li>
            <li>Upholding high ethical standards.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutUsMain;
