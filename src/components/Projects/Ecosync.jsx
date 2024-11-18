import { PiBowlFoodBold } from "react-icons/pi";
import EcosyncImg from "./../../assets/images/ecosync.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { GiTargetArrows } from "react-icons/gi";

const Ecosync = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={EcosyncImg} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">
        {/* desc */}
        <h2 style={{width:"70%"}}>Potential Positive Impacts</h2>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <PiBowlFoodBold
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Improved Food Safety
            </h3>
            <p>
              EcoSyNC certification ensures that eggs meet stringent safety
              standards, reducing the risk of food-borne illnesses and enhancing
              consumer trust.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}

          {/* icon */}
          <MdOutlineShoppingCart
            size={40}
            style={{ marginTop: "20px", color: "#581411" }}
          />

          <div className="approach-text">
            <h3>
              {/* Approach */}
              Enhanced Market Access
            </h3>
            <p>
              EcoSyNC Certified products would gain entry into premium markets
              both domestically and internationally, diversifying and increasing
              revenue streams for producers.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <FaBalanceScale
              size={40}
              style={{ marginTop: "20px", color: "#581411" }}
            />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Sustainable Practices
            </h3>
            <p>
              EcoSyNC promotes environmentally friendly farming methods and
              animal welfare standards, contributing to long-term
              sustainability.
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
              Empowering Smallholders
            </h3>
            <p>
              EcoSyNC provides training and support to smallholder farmers,
              empowering them to adopt modern practices and improve their
              livelihoods.
            </p>
          </div>
        </div>
        <div className="project-approach">
          {/* approach */}
          <div>
            {/* icon */}
            <TiTick size={40} style={{ marginTop: "20px", color: "#581411" }} />
          </div>
          <div className="approach-text">
            <h3>
              {/* Approach */}
              Consumer Confidence
            </h3>
            <p>
              Certification assures consumers of quality and ethical production
              practices, leading to increased demand for certified eggs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ecosync;
