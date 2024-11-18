import justice from "./../../assets/images/justice.jpg";

const Justice = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={justice} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">{/* desc */}</div>
    </div>
  );
};
export default Justice;
