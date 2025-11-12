import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__skill">
          <h1 className="footer__title">Улучшения</h1>
          <ul className="footer__skill-list">
            <li className="footer__skill-item">
              <button className="footer__skill-btn attack">Атака</button>
            </li>
            <li className="footer__skill-item">
              <button className="footer__skill-btn crit">Крит шанс</button>
            </li>
            <li className="footer__skill-item">
              <button className="footer__skill-btn money">Монеты</button>
            </li>
            <li className="footer__skill-item">
              <button className="footer__skill-btn none">Что-то еще</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
