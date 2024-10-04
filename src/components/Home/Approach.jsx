import "./home.css";
import judge from "../../assets/images/judge.jpg";
import advocacy from "../../assets/images/advocacynew.png";
import research from "../../assets/images/research.png";
import aid from "../../assets/images/legalaid.png";
const Approach = ()=>{
  return (
    <div id="approach">
      <div className="approach-card">
        <div className="approach-card-one">
          <img src={judge} alt="judge-icon" />

          <div>
            <h3>Strategic Litigation</h3>
          </div>
        </div>
        <p>We work in the courts to protect animals and the environment.</p>
      </div>
      <div className="approach-card">
        <div className="approach-card-one">
          <img src={advocacy} alt="judge-icon" />

          <div>
            <h3>Policy & Advocacy</h3>
          </div>
        </div>
        <p>
          We advocate for the enhancement of the welfare of animals, habitats
          they live in and the communities that live with them.
        </p>
      </div>
      <div className="approach-card">
        <div className="approach-card-one">
          <img src={research} alt="judge-icon" />

          <div>
            <h3>Science & Research</h3>
          </div>
        </div>
        <p>
          We research to drive informed decision-making, shaping policy, and
          advocating for change.
        </p>
      </div>
      <div className="approach-card">
        <div className="approach-card-one">
          <img src={aid} alt="judge-icon" />

          <div>
            <h3>Legal Assistance</h3>
          </div>
        </div>
        <p>
          We advise and offer legal support on regulatory, policy, and justice
          issues.
        </p>
      </div>
    </div>
  );
}

export default Approach;