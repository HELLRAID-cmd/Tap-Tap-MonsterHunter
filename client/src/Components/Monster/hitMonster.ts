import type { HitMonsterType } from "./MonsterProps";

const hitMonster = ({setMonsterHealth, setAnimation}: HitMonsterType) => {
  setMonsterHealth(prev => Math.max(prev - (Math.floor(Math.random() * 10) + 1), 0));

  if (setAnimation) {
  setAnimation("hit");
  setTimeout(() => setAnimation(""), 300);
}
};

export default hitMonster;