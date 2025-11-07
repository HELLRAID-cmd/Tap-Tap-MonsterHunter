import type { HitMonsterType } from "../../MonsterProps";

const hitMonster = ({setMonsterHealth, setAnimation, setLastDamage, monsterHealth}: HitMonsterType) => {
  const damage = Math.floor(Math.random() * 10) + 1;
  const newHealth = monsterHealth - damage;

  setMonsterHealth(newHealth <= 0 ? 0 : newHealth);

  setLastDamage(prev => [...prev, damage]);
  // Через 1с убирать дамаг
  setTimeout(() => setLastDamage(prev => prev.slice(1)), 1000);

  setAnimation("hit");
};

export default hitMonster;