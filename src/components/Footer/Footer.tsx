import './Footer.css';
import logo from '../../assets/real-estate-logo-white.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-subcontainer">
        <div className="column-big">
          <img src={logo} alt="logo" className="logo-footer" />
        </div>
        <div className="column">
          <div className="title">title</div>
          <span>cat</span>
          <span>cat</span>
          <span>cat</span>
        </div>
        <div className="column">
          <div className="title">title</div>
          <span>cat</span>
          <span>cat</span>
          <span>cat</span>
        </div>
        <div className="column">
          <div className="title">title</div>
          <span>cat</span>
          <span>cat</span>
          <span>cat</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
