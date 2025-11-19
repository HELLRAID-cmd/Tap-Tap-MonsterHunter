import { useGame } from "../context/Context";

const FooterCrit = () => {
  const {setAttackCrit} = useGame();

  const nextUpgrade = 0.02;

  const upgradeCrit = () => {
    setAttackCrit(prev => {
      const upgrade = prev + nextUpgrade;
      console.log("Улучшено", (upgrade * 100).toFixed(0) + "%");
      return upgrade >= 0.67 ? 0.67 : upgrade;
    })
  }

  return (
    <button className="footer__skill-btn crit" onClick={upgradeCrit}>
      Крит шанс
      <span>+{(nextUpgrade * 100).toFixed(0)}%</span>
      <span>Уровень: </span>
    </button>
  )
}

export default FooterCrit;