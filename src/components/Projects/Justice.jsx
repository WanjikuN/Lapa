import justice from "./../../assets/images/justice.jpg";
import { FaBook } from "react-icons/fa";
import { Gi3dHammer, GiCrimeSceneTape, GiTargetArrows } from "react-icons/gi";
import { MdPolicy } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
const Justice = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={justice} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">
        {/* desc */}
        <h2 style={{width:"70%"}}>Court Monitoring as a Tool</h2>
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
              Transparency and Accountability
            </h3>
            <p>
              Monitors act as independent observers, holding the justice system
              accountable for handling wildlife crimes fairly and efficiently.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}

          {/* icon */}
          <FaBook size={40} style={{ marginTop: "20px", color: "#581411" }} />

          <div className="approach-text">
            <h3>
              {/* Approach */}
              Data Collection
            </h3>
            <p>
              Monitored data on wildlife cases provides valuable insights. It
              reveals trends in wildlife crime, exposes weaknesses in
              prosecution, and identifies areas for improvement in legal
              processes.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <BsBuildingsFill
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Deterrence
            </h3>
            <p>
              Knowing their cases are being monitored can deter poachers and
              wildlife traffickers who rely on a weak judicial system to operate
              freely.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <GiTargetArrows
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Improved Case Outcomes
            </h3>
            <p>
              Monitoring can highlight issues that might otherwise go unnoticed,
              such as inadequate evidence presentation or weak sentencing.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <GiTargetArrows
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Empowering Communities
            </h3>
            <p>
              Monitoring can empower communities affected by wildlife crime by
              keeping them informed about the legal process and its
              effectiveness.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Justice;
