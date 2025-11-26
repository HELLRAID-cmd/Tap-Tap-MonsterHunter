import Coins from "../Coins/Coins";
import "./footer.scss";
import FooterAttack from "./components/FooterAttack";
import FooterCrit from "./components/FooterCrit";
import FooterCritDamage from "./components/FooterCritDamage";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__skill">
          <div className="footer__skill-title">
            <h1 className="footer__title">Улучшения</h1>
            <Coins />
          </div>
          <ul className="footer__skill-list">
            <li className="footer__skill-item">
              <FooterAttack/>
            </li>
            <li className="footer__skill-item">
              <FooterCrit/>
            </li>
            <li className="footer__skill-item">
              <FooterCritDamage />
            </li>
            <li className="footer__skill-item">
              <button className="footer__skill-btn money">Монеты</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
