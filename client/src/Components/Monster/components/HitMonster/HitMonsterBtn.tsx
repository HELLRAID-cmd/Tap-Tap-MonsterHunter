import type { HitMonsterType } from "../../MonsterProps";
import hitMonster from "./HitMonster";

const HitMonsterBtn = ({monsterHealth, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, onMonsterDeath, addCoins}: HitMonsterType ) => {
  return (
    // Бить монстра (Не рестарт)
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, monsterHealth, addCoins, onMonsterDeath})}>Ударить</button>
  )
}

export default HitMonsterBtn;