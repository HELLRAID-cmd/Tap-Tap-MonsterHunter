import { PLAYER_DAMAGE } from "../Config/Config";
import type { FooterAttackProps } from "./FooterProps";

const FooterAttack = ({setAttack}: FooterAttackProps) => {
  const upgradeAttack = () => {
    const attack = PLAYER_DAMAGE + 2
    setAttack(prev => prev + attack);
  }

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>Атака</button>
  )
}

export default FooterAttack;