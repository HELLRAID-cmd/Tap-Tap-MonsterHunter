import type { FooterAttackProps } from "./FooterProps";

const FooterAttack = ({setAttack}: FooterAttackProps) => {
  const upgradeAttack = () => {
    setAttack(prev => prev + 2);
  }

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>Атака</button>
  )
}

export default FooterAttack;