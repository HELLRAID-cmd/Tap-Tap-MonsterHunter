import { CRIT_MULTIPLIER, HEALTH } from "../../../Config/Config";
import { useGame } from "../../../context/Context";
import type { HandleChangeColorType, HitMonsterType } from "../../MonsterProps";
import { useMonsterActions } from "../../useMonsterActions ";

export const useHitMonster = () => {
  const { attack, addCoins, attackCrit, setTotalDamage, setStatusClick, setLevelMonster } = useGame();
  const { handleRestart, handleChangeColor } = useMonsterActions();

  const hitMonster = ({
    setMonsterHealth,
    setAnimation,
    setAnimationDamage,
    setLastDamage,
    monsterHealth,
    setColor,
    setMaxHealth,
  }: HitMonsterType & HandleChangeColorType) => {
    // Проверка крита
    const isCrit = Math.random() < attackCrit;
    const critDamage = isCrit ? Math.round(attack * CRIT_MULTIPLIER) : attack;

    const newHealthMonster = monsterHealth - critDamage;
    setMonsterHealth(newHealthMonster <= 0 ? 0 : newHealthMonster);

    // Общий дамаг
    setTotalDamage(prev => +(prev + attack).toFixed(0));

    // Общие нажатия
    setStatusClick(prev => prev + 1);

    // Проверка на то что монстр погиб, добовляет монеты
    if (newHealthMonster <= 0) {
      const baseHealth = HEALTH;
      setLevelMonster(prev => {
        const nextLevel = prev + 1;
        const nextHealth = Math.floor(baseHealth * Math.pow(1.2, nextLevel - 1));

        handleRestart({ setMonsterHealth, setMaxHealth, newHealth: nextHealth });
        handleChangeColor({ setColor });
        addCoins();
        
        return nextLevel;
      });
    }

    setLastDamage((prev) => [...prev, critDamage]);
    // Через 1с убирать дамаг
    setTimeout(() => setLastDamage((prev) => prev.slice(1)), 1000);

    setAnimation(isCrit ? "crit-hit" : "hit");
    setAnimationDamage(isCrit ? "crit-damage" : "damage");
  };

  return { hitMonster };
};
