import type {
  HandleChangeColorType,
  HitMonsterType,
} from "../../MonsterProps";
import { useHitMonster } from "./useHitMonster";

const HitMonsterBtn = ({
  setMonsterHealth,
    setAnimation,
    setAnimationDamage,
    setLastDamage,
    monsterHealth,
    setColor,
    setMaxHealth,
}: HitMonsterType & HandleChangeColorType) => {
  const { hitMonster } = useHitMonster();

  return (
    // Бить монстра
    <button
      className="btn"
      onClick={() =>
        hitMonster({
          setMonsterHealth,
          setAnimation,
          setAnimationDamage,
          setLastDamage,
          monsterHealth,
          setColor,
          setMaxHealth
        })
      }
    >
      Ударить
    </button>
  );
};

export default HitMonsterBtn;
