import type { hitMonsterType } from "./MonsterProps";

const hitMonster = ({setMonsterHealth}: hitMonsterType) => {
  setMonsterHealth(prev => Math.max(prev - (Math.floor(Math.random() * 10) + 1), 0));
};

export default hitMonster;