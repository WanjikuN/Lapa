import OurCause from "./OurCause";
import WorkWithUs from "./WorkWithUs";


const AboutUs = ({ setPage, page }) => {
  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutUs setPage={setPage} />;
      case "ourCause":
        return <OurCause setPage={setPage} />;
      case "workWithUs":
        return <WorkWithUs setPage={setPage} />;
      default:
        return <AboutUs setPage={setPage} />;     }
  };

  return (
    <div id="container">
      <div>{/* navbar */}</div>
      <div>{renderPage()}</div>
      <div>{/* footer */}</div>
    </div>
  );
};

export default AboutUs;
