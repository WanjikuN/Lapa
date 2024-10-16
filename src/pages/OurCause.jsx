import React from "react";
import cause from "../assets/images/ourcausea.png"; 
const OurCause = () => {
  return (
    <div id="our-cause">
      <h1 id="title">Our Cause</h1>
      
      <div className="approach2" id="approach2-cause">
        <div className="bubble" id="bubble-cause">
          <div className="bubble-cont">
            <h1>Combining Legal Strategies with Collaboration</h1>
            <p>LAPA envisions a world where:</p>
            <ul>
              <li>
                Animals, both wild and working, are treated with respect and
                compassion, free from exploitation and cruelty.
              </li>
              <li>
                Wildlife populations thrive in healthy ecosystems, coexisting
                peacefully with human communities.
              </li>
              <li>
                The power of law is effectively used to safeguard animal welfare
                and environmental sustainability.
              </li>
              <li>
                Collaboration between communities, policymakers, and
                organizations empowers positive change for a just and
                sustainable future.
              </li>
              <li>
                Sustainable food systems provide safe, nutritious food for all
                while protecting the environment for future generations.
              </li>
            </ul>
          </div>
          <img src={cause}alt="our-cause" />
        </div>
        <div className="bubble" id="bubble-cause">
          <div className="bubble-cont">
            <p>
              LAPA tackles biodiversity loss and overexploitation with a clever
              strategy called Situational Crime Prevention (SCP). This framework
              goes beyond simply reacting to problems. Instead, it focuses on
              identifying the situations that create opportunities for these
              harmful activities. By understanding these situations, LAPA can
              work to change them, making it more difficult to harm our precious
              wildlife and ecosystems.
            </p>
            <p>
              LAPA isn't just another organization tinkering around the edges.
              We're igniting a revolution to combat biodiversity loss! We're
              supercharging law enforcement with the training, tools, and
              support they need to become guardians of our natural world. We
              don't just point fingers; we roll up our sleeves and work
              alongside policymakers, building an unstoppable wave of political
              will to protect our precious ecosystems.
            </p>
            <p>
              Join LAPA, and be part of the movement that ensures a future where
              biodiversity thrives, not just survives!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCause;
