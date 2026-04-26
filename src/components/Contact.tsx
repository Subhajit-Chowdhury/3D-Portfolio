import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:er.subhajitchowdhury@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                er.subhajitchowdhury@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/subhajit-dataengineer/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — subhajit-dataengineer
              </a>
            </p>
            <p>
              +91 7029860941
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/subhajit-dataengineer/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Subhajit Chowdhury</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
