import { MONSTER_HEALTH, MONSTER_MULTIPLIER_HEALTH } from "../Components/Config/Config";

// Находим здоровье монстра в зависимости от его уровня
const getMonsterHealth = (level: number) => {
  // Мультиплаеер здоровья
  let health = MONSTER_HEALTH;

  for (let i = 1; i < level; i++) {
    let multiplier = MONSTER_MULTIPLIER_HEALTH;

    // Корректировка мультиплайера
    if (i >= 100) multiplier = 1.02;
    else if (i >= 50) multiplier = 1.04;

    health *= multiplier;
  }

  return Math.floor(health);
};

export default getMonsterHealth;