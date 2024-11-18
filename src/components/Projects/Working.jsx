import { MdOutlineManageSearch } from "react-icons/md";
import working from "./../../assets/images/workinganimals.jpg";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
const WorkingAnimals = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={working} alt="claws-icon" />
        <p>{page}</p>
      </div>

      {/*  */}
      <div id="project-desc">
        {/* desc */}
        <div id="project-desc" >
          {/* desc */}
          <h2 style={{ width: "70%" }}>Critical Issues</h2>
          
            <div className="approach-text">
              <p>1. Severe Decline in Donkey Numbers </p>
            </div>
          
            <div className="approach-text">
              <p>2. Economic Hardship for Rural Communities </p>
           
          </div>
          
            <div className="approach-text">
              <p>3. Animal Welfare Concerns: </p>
            </div>
         
        </div>
        <h2 style={{ width: "70%" }}>Our Strategy</h2>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <MdOutlinePublishedWithChanges
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Policy Change
            </h3>
            <p>
              We work with communities and policy makers to address the
              inadequate legal framework surrounding animal welfare, breeding,
              transport, and exploitation through a comprehensive legal
              approach. We support efforts aimed at strengthening laws to deter
              donkey theft, trafficking, and illegal slaughter, including
              harsher penalties and clearer definitions of crimes.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}

          {/* icon */}
          <MdOutlineManageSearch
            size={40}
            style={{ marginTop: "20px", color: "#581411" }}
          />

          <div className="approach-text">
            <h3>
              {/* Approach */}
              Crime Research
            </h3>
            <p>
              We conduct powerful research combining quantitative data analysis
              of crime reports and qualitative research through interviews and
              focus groups with stakeholders, including donkey owners, law
              enforcement officials, and other legal experts to prevent the loss
              of donkeys to cruelty, theft and illegal slaughter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkingAnimals;
