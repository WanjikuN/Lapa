import waves from "./../../assets/images/waves.jpg";
import claws from "./../../assets/images/claws.png";
import justice from "./../../assets/images/justice.jpg";
import working from "./../../assets/images/workinganimals.jpg";
import eco from "./../../assets/images/ecosync.jpg";

const Projects = () =>{
  return (
    <div id="projects">
      <h2>Current Projects</h2>
      <div id="projects-cards">
        <div className="projects-card">
          <div className="approach-card-one">
            {/* image */}
            <img
              style={{ borderRadius: "10px", height: "90%", marginTop: "20px" }}
              src={waves}
              alt="waves-icon"
            />
            {/* text */}
            <div>
              <h3>Project WAVES</h3>
            </div>
          </div>
          <p>
            Project WAVES is a campaign for the conservation of marine species
            and protection of their habitats.
          </p>
        </div>

        <div className="projects-card">
          <div className="approach-card-one">
            {/* image */}
            <img
              style={{ borderRadius: "10px", height: "80%", marginTop: "20px" }}
              src={waves}
              alt="waves-icon"
            />

            {/* text */}
            <div>
              <h3>CLAWS</h3>
            </div>
          </div>
          <p>
            Community Legal Aid Workers (CLAWS) provide legal assistance to
            communities affected by human-wildlife conflict
          </p>
        </div>
        <div className="projects-card">
          <div className="approach-card-one">
            {/* image */}
            <img
              style={{ borderRadius: "10px", height: "80%", marginTop: "20px" }}
              src={justice}
              alt="waves-icon"
            />

            {/* text */}
            <div>
              <h3>Justice for Wildlife</h3>
            </div>
          </div>
          <p>
            We leverage laws and technology to empower law enforcement and
            disrupt criminal networks that trade in wildlife.
          </p>
        </div>
        <div className="projects-card">
          <div className="approach-card-one">
            {/* image */}
            <img
              style={{ borderRadius: "10px", height: "80%", marginTop: "20px" }}
              src={working}
              alt="waves-icon"
            />

            {/* text */}
            <div>
              <h3>Safeguarding Working Animals</h3>
            </div>
          </div>
          <p>
            We advocate for strengthened legal protections for working animals
            from cruelty and over exploitation.
          </p>
        </div>
        <div className="projects-card">
          <div className="approach-card-one">
            {/* image */}
            <img
              style={{ borderRadius: "10px", height: "80%", marginTop: "20px" }}
              src={eco}
              alt="waves-icon"
            />

            {/* text */}
            <div>
              <h3>EcoSyNC</h3>
            </div>
          </div>
          <p>
            We implement Kenya’s first independent certification program that
            verifies the eco - sustainability of farm production.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;