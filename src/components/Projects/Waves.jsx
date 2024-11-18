import waves from "./../../assets/images/waves.jpg";

const Waves = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={waves} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">{/* desc */}</div>
    </div>
  );
};
export default Waves;
