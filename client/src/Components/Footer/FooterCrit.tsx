import { useGame } from "../context/Context";

const FooterCrit = () => {
  const [setAttackCrit] = useGame();

  const upgradeCrit = () => {
    setAttackCrit(prev => {
      const upgrade = prev * 2;
      return upgrade
    })
  }

  return (
    <button className="footer__skill-btn crit" onClick={upgradeCrit}>Крит шанс</button>
  )
}

export default FooterCrit;