import { CRIT_CHANCE, CRIT_MULTIPLIER } from "../../../Config/Config";
import type { HitMonsterType } from "../../MonsterProps";

const hitMonster = ({setMonsterHealth, attack, setAnimation, setAnimationDamage, setLastDamage, monsterHealth, addCoins}: HitMonsterType) => {
  const baseDamage = attack;
  
  // Проверка крита
  const isCrit = Math.random() < CRIT_CHANCE;
  const critDamage = isCrit ? Math.round(baseDamage * CRIT_MULTIPLIER) : baseDamage;
  
  const newHealth = monsterHealth - critDamage;
  setMonsterHealth(newHealth <= 0 ? 0 : newHealth);

  // Проверка на то что монстр погиб
  if(newHealth <= 0) {
    setMonsterHealth(0);
    addCoins();
    return;
  }

  setLastDamage(prev => [...prev, critDamage]);
  // Через 1с убирать дамаг
  setTimeout(() => setLastDamage(prev => prev.slice(1)), 1000);

  setAnimation(isCrit ? "crit-hit" : "hit");
  setAnimationDamage(isCrit ? "crit-damage" : "damage");
};

export default hitMonster;