import claws from "./../../assets/images/claws.png";
const Claws = ({page}) => {
  return (
    <div id="projects-content">
      <div id="project-img">
        {/* image/Name */}
        <img src={claws} alt="claws-icon" />
        <p>{page}</p>
      </div>
      <div id="project-desc">
        {/* desc */}
      </div>
    </div>
  );
};
export default Claws;
