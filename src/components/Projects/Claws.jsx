import { FaBook } from "react-icons/fa";
import claws from "./../../assets/images/claws.png";
import { Gi3dHammer, GiCrimeSceneTape, GiTargetArrows } from "react-icons/gi";
import { MdPolicy } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
const Claws = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={claws} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">
        {/* desc */}
        <h2>Guiding Theory</h2>
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
              Access to Justice
            </h3>
            <p>
              CLAWs bridge the gap between under-served communities and the
              legal systems.
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
              Education and Empowerment
            </h3>
            <p>
              CLAWs empower community members to unlock their constitutional
              rights; such as the Right to a Clean and Healthy Environment;
              Right to enforce environmental rights, Access to natural resources
              and right to property.
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
              Community Building
            </h3>
            <p>
              CLAWs are integral parts of the community, fostering trust,
              collaboration and collective efficacy.
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
              Conflict Resolution:
            </h3>
            <p>
              By providing alternative dispute resolution mechanisms, CLAWS
              contribute to resolving conflicts within communities without
              resorting to formal legal proceedings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Claws;
