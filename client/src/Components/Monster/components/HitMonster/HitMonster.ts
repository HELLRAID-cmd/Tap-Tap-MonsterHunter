import type { HitMonsterType } from "../../MonsterProps";

const hitMonster = ({setMonsterHealth, setAnimation, setLastDamage, monsterHealth}: HitMonsterType) => {
  const damage = Math.floor(Math.random() * 10) + 1;
  const newHealth = monsterHealth - damage;

  setMonsterHealth(newHealth <= 0 ? 0 : newHealth);

  setLastDamage(damage);
  setTimeout(() => setLastDamage(null), 800);

  setAnimation("hit");
};

export default hitMonster;