import { useGame } from "../context/Context";

const FooterAttack = () => {
  const {setAttack, attack} = useGame();

  const nextUpgrade = +(attack * 0.03).toFixed(2);
  
  const upgradeAttack = () => {
    setAttack(prev => {
      const updated = +(prev + prev * 0.03).toFixed(2);
      return updated;
    });
  }

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>
      Атака
      <span>+{nextUpgrade}</span>
    </button>
  )
}

export default FooterAttack;