import type { HitMonsterType } from "../../MonsterProps";
import hitMonster from "./HitMonster";

const HitMonsterBtn = ({attack, addCoins, monsterHealth, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage}: HitMonsterType ) => {
  return (
    // Бить монстра (Не рестарт)
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({attack, addCoins, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, monsterHealth})}>Ударить</button>
  )
}

export default HitMonsterBtn;