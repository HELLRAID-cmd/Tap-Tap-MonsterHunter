import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__skill">
          <ul className="footer__skill-list">
            <li className="footer__skill-item">Атака</li>
            <li className="footer__skill-item">Крит шанс</li>
            <li className="footer__skill-item">Монеты</li>
            <li className="footer__skill-item">Что-то еще</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
