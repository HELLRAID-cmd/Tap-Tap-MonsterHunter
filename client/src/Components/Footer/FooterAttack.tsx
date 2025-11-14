import { useGame } from "../context/Context";

const FooterAttack = () => {
  const {setAttack} = useGame();
  
  const upgradeAttack = () => {
    setAttack(prev => {
      const updated = prev + 2;
      console.log('Атака', updated);
      return updated;
    });
  }

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>Атака</button>
  )
}

export default FooterAttack;