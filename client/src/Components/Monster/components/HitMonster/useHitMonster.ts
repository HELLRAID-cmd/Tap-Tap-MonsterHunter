import { CRIT_MULTIPLIER } from "../../../Config/Config";
import { useGame } from "../../../context/Context";
import type { HitMonsterType } from "../../MonsterProps";

export const useHitMonster = () => {
  const {attack, addCoins, attackCrit} = useGame();

  const hitMonster = ({
    setMonsterHealth, 
    setAnimation, 
    setAnimationDamage, 
    setLastDamage, 
    monsterHealth 
  }: HitMonsterType) => {
    // Проверка крита
  const isCrit = Math.random() < attackCrit;
  const critDamage = isCrit ? Math.round(attack * CRIT_MULTIPLIER) : attack;
  
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
  }

  return {hitMonster};
}
