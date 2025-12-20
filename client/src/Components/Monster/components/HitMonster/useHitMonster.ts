import getMonsterHealth from "../../../../utils/getMonsterHealth";
import { useAttackDamage } from "../../../context/AttackContext";
import { useGame } from "../../../context/Context";
import { useCrit } from "../../../context/CritContext";
import { useCritDamage } from "../../../context/CritDamageContext";
import { useFinalBoss } from "../../../FinalBoss/FinalBossContext";
import type { HandleChangeColorType, HitMonsterType } from "../../MonsterProps";
import { useMonsterActions } from "../../useMonsterActions";

export const useHitMonster = () => {
  const { addCoins, setTotalDamage, setStatusClick, setLevelMonster } =
    useGame();
  const { handleRestart, handleChangeColor } = useMonsterActions();
  const { attack } = useAttackDamage();
  const { attackCrit } = useCrit();
  const { critDamage } = useCritDamage();
  const { isFinalBoss, stopTimer } = useGame();
  const { setFinalBossHp, setFinalBossWinner, setFinalBossRegenEnable } =
    useFinalBoss();

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
    const critDamageAttack = isCrit ? Math.round(attack * critDamage) : attack;

    // Показываем урон
    setLastDamage((prev) => [...prev, critDamageAttack]);

    // Через 1с убирать урон
    setTimeout(() => setLastDamage((prev) => prev.slice(1)), 1000);

    // Удар по финальному боссу
    if (isFinalBoss) {
      // Общие нажатия по боссу
      setStatusClick((prev) => prev + 1);

      setAnimationDamage(isCrit ? "crit-damage" : "damage");

      // Общий дамаг по боссу
      setTotalDamage((prev) => +(prev + critDamageAttack).toFixed(0));

      setFinalBossHp((prev) => {
        const newHp = Math.max(prev - critDamageAttack, 0);

        // Победа пользователя над боссом
        if (newHp <= 0) {
          // Победное окно
          setFinalBossWinner(true);
          
          // Остановка таймера
          stopTimer();

          // Отсюда отключается реген хп
          setFinalBossRegenEnable(false);
        }

        return newHp;
      });

      return;
    }

    const newHealthMonster = monsterHealth - critDamageAttack;
    setMonsterHealth(newHealthMonster <= 0 ? 0 : newHealthMonster);

    // Общий дамаг
    setTotalDamage((prev) => +(prev + attack).toFixed(0));

    // Общие нажатия
    setStatusClick((prev) => prev + 1);

    // Проверка на то что монстр погиб, добовляет монеты
    if (newHealthMonster <= 0) {
      setLevelMonster((prev) => {
        // Следующий уровень
        const nextLevel = prev + 1;

        // Вычисление здоровья следующего монстра
        const nextHealth = getMonsterHealth(nextLevel);

        setTimeout(() => {
          handleRestart({
            setMonsterHealth,
            setMaxHealth,
            newHealth: nextHealth,
          });
          handleChangeColor({ setColor });
          addCoins();
        }, 0);

        return nextLevel;
      });
    }
    setAnimation(isCrit ? "crit-hit" : "hit");
    setAnimationDamage(isCrit ? "crit-damage" : "damage");
  };

  return { hitMonster };
};
