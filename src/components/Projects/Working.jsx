import working from "./../../assets/images/workinganimals.jpg";

const WorkingAnimals = ({ page }) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={working} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">{/* desc */}</div>
    </div>
  );
};
export default WorkingAnimals;
