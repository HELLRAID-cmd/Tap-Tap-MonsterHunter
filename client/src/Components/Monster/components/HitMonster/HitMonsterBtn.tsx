import type { HitMonsterType } from "../../MonsterProps";
import hitMonster from "./HitMonster";

const HitMonsterBtn = ({attack, monsterHealth, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, addCoins}: HitMonsterType ) => {
  return (
    // Бить монстра (Не рестарт)
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({attack, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, monsterHealth, addCoins})}>Ударить</button>
  )
}

export default HitMonsterBtn;