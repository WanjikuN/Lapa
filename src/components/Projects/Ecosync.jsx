import EcosyncImg from "./../../assets/images/ecosync.jpg";

const Ecosync = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={EcosyncImg} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">{/* desc */}</div>
    </div>
  );
};
export default Ecosync;
