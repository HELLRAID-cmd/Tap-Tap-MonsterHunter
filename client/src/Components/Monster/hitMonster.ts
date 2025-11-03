import type { hitMonsterType } from "./MonsterProps";

const hitMonster = ({setMonsterHealth, setAnimation}: hitMonsterType) => {
  setMonsterHealth(prev => Math.max(prev - (Math.floor(Math.random() * 10) + 1), 0));

  if (setAnimation) {
  setAnimation("hit");
  setTimeout(() => setAnimation(""), 300);
}
};

export default hitMonster;