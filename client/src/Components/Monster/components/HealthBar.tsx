import type { HealthBar } from "../MonsterProps";

const HealthBar = ({monsterHealth, maxHealth}: HealthBar) => {
  return (
    <div className="health-bar">
      <div className="health-bar__fill" style={{width: `${(monsterHealth / maxHealth) * 100}%`}}></div>
      <span className="health-bar__number">{monsterHealth.toFixed(2)}хп</span>
    </div>
  )
}

export default HealthBar;