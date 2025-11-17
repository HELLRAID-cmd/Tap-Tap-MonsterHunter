import type { HitMonsterType } from "../../MonsterProps";
import { useHitMonster } from "./useHitMonster";

const HitMonsterBtn = ({monsterHealth, setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage}: HitMonsterType ) => {
  const {hitMonster} = useHitMonster();
  
  return (
    // Бить монстра (Не рестарт)
    <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, monsterHealth})}>Ударить</button>
  )
}

export default HitMonsterBtn;