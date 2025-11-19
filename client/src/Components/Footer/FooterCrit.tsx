import { useGame } from "../context/Context";

const FooterCrit = () => {
  const {setAttackCrit} = useGame();

  const upgradeCrit = () => {
    setAttackCrit(prev => {
      const upgrade = prev + 0.05;
      console.log("Улучшено", upgrade.toFixed(2))
      return upgrade > 1 ? 1 : upgrade;
    })
  }

  return (
    <button className="footer__skill-btn crit" onClick={upgradeCrit}>Крит шанс</button>
  )
}

export default FooterCrit;