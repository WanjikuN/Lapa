
import { Gi3dHammer, GiCrimeSceneTape } from "react-icons/gi";
import waves from "./../../assets/images/waves.jpg";
import { MdPolicy } from "react-icons/md";

const Waves = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={waves} alt="claws-icon" />
        <p>Project {page}</p>
      </div>
      <div id="project-desc">
        {/* desc */}
        <h2>Our Approach</h2>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <GiCrimeSceneTape
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Crime Science
            </h3>
            <p>
              We work with crime analysts to Identify and map incidents of
              illegal, unreported and unregulated fishing.
              <br />
              By analyzing patterns and trends, we identify high-risk areas,
              suspicious vessel movements, and networks involved in illegal
              transshipments. This intelligence is then be used to plan targeted
              operations and interventions
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}

          {/* icon */}
          <MdPolicy size={40} style={{ marginTop: "20px", color: "#581411" }} />

          <div className="approach-text">
            <h3>
              {/* Approach */}
              Policy Development
            </h3>
            <p>
              We work with policymakers and communities to enhance the fisheries
              framework to ensure marine species and the habitats they exist in
              are protected.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <Gi3dHammer
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Law Enforcement
            </h3>
            <p>
              We support law enforcement to enforce existing laws and
              regulations and actively work to build the capacity of law
              enforcement to detect, apprehend, prosecute and convict criminals
              engaging in these crimes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Waves;
