import { useState } from "react";
import { useGame } from "../context/Context";

const FooterAttack = () => {
  const {setAttack, attack} = useGame();
  const [level, setLevel] = useState(1);
  const [price, setPrice] = useState(1);

  const nextUpgrade = +(attack * 0.03).toFixed(2);
  
  const upgradeAttack = () => {
    setAttack(prev => +(prev + prev * 0.03).toFixed(2));
    setLevel(prev => prev + 1);
    setPrice(prev => +(prev * 1.20).toFixed(2));
  }

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>
      Атака
      <span>+{nextUpgrade}</span>
      <span>Цена: {price}</span>
      <span>Уровень: {level}</span>
    </button>
  )
}

export default FooterAttack;