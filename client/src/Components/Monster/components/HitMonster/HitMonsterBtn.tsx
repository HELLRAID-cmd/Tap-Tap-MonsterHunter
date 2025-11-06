import type { HitMonsterType } from "../../MonsterProps";
import hitMonster from "./HitMonster";

const HitMonsterBtn = ({monsterHealth, setMonsterHealth, setAnimation, setLastDamage}: HitMonsterType ) => {
  return (
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({setMonsterHealth, setAnimation, setLastDamage, monsterHealth})}>Ударить</button>
  )
}

export default HitMonsterBtn;