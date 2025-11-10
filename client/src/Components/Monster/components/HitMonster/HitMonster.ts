import { CRIT_CHANCE, CRIT_MULTIPLIER, PLAYER_DAMAGE } from "../../../Config/Config";
import type { HitMonsterType } from "../../MonsterProps";

const hitMonster = ({setMonsterHealth, setAnimation, setAnimationDamage, setLastDamage, monsterHealth}: HitMonsterType) => {
  const baseDamage = PLAYER_DAMAGE;
  
  // Проверка крита
  const isCrit = Math.random() < CRIT_CHANCE;
  const critDamage = isCrit ? Math.round(baseDamage * CRIT_MULTIPLIER) : baseDamage;
  
  const newHealth = monsterHealth - critDamage;
  setMonsterHealth(newHealth <= 0 ? 0 : newHealth);

  setLastDamage(prev => [...prev, critDamage]);
  // Через 1с убирать дамаг
  setTimeout(() => setLastDamage(prev => prev.slice(1)), 1000);

  setAnimation(isCrit ? "crit-hit" : "hit");
  setAnimationDamage(isCrit ? "crit-damage" : "damage");
};

export default hitMonster;