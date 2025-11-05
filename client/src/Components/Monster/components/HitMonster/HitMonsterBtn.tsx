import type { HitMonsterType } from "../../MonsterProps";
import hitMonster from "./HitMonster";

const HitMonsterBtn = ({monsterHealth, setMonsterHealth, setAnimation}: HitMonsterType ) => {
  return (
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({setMonsterHealth, setAnimation})}>Ударить</button>
  )
}

export default HitMonsterBtn;