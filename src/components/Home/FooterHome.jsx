import "./home.css";

const FooterHome = () => {
  return (
    <div id="footer-home">
      <div id="news-letter">
        <p>Subscribe to Our NewsLetter</p>
        <div className="input-container">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
