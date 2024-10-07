import "./home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterHome = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer-home">
      <div id="news-letter">
        <p>Subscribe to Our NewsLetter</p>
        <div className="input-container">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div id="footer">
        <div id="footer-links">
          <div>
            <p>Lawyers for Animal Protection</p>
            <img width="250px" src="./lapa-logo.png" alt="LAPA Logo" />
          </div>

          <div id="social-links">
            <p>Follow Us</p>
            <a
              href="https://twitter.com/yourtwitterhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://facebook.com/yourfacebookhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedinhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <div id="contacts">
            <p>Contact Us</p>
            <h6>Email: info@lapafrica.org</h6>
            <h6>Phone: +254 123 456 789</h6>
            <h6>Address: Nairobi, Kenya</h6>
          </div>
        </div>

        <div className="footer-copyright">
          Copyright &copy; {currentYear}. All rights reserved. | LAPA - Lawyers
          for Animal Protection in Africa
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
