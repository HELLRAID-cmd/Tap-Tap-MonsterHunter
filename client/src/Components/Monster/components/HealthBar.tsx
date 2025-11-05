import type { HealthBar } from "../MonsterProps";

const HealthBar = ({monsterHealth, maxHealth}: HealthBar) => {
  return (
    <div className="health-bar">
      <div className="health-bar__fill" style={{width: `${(monsterHealth / maxHealth) * 300}px`}}></div>
      <span className="health-bar__number">{monsterHealth}хп</span>
    </div>
  )
}

export default HealthBar;