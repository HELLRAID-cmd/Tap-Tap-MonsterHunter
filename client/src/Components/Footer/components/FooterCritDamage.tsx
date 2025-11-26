import { useGame } from "../../context/Context";
import { useCritDamage } from "../../context/CritDamageContext";

const FooterCritDamage = () => {
  const { setNotEnoughCoins, coins, setCoins } = useGame();
  const {
    critDamagePrice,
    levelCritDamage,
    setCritDamage,
    setCritDamagePrice,
    setLevelCritDamage,
  } = useCritDamage();

  const nextUpgrade = 1.2;
  const nextLevel = levelCritDamage + 1;

  const upgradeCritDamage = () => {
    // Проверка на то есть ли монеты
    if (coins < critDamagePrice) {
      // Уведомление монет
      setNotEnoughCoins(true);

      setTimeout(() => {
        setNotEnoughCoins(false);
      }, 600);
      return;
    } else {
      setCoins((prev) => prev - critDamagePrice);
    }

    if (levelCritDamage === 30) {
      return;
    }

    // Повышение урона
    setCritDamage((prev) => {
      const upgrade = prev + nextUpgrade;
      return upgrade;
    });

    // Повышение уровня
    setLevelCritDamage(nextLevel);

    // Повышение цены
    setCritDamagePrice((prev) => +(prev * 1.4).toFixed(1));

    if (nextLevel === 10) {
      setCritDamagePrice((prev) => +(prev * 0.8).toFixed(1));
    }

    if (nextLevel === 20) {
      setCritDamagePrice((prev) => +(prev * 0.4).toFixed(1));
    }

    if (nextLevel === 30) {
      setCritDamagePrice((prev) => +(prev * 0.2).toFixed(1));
    }
  };

  return (
    <button
      className={`footer__skill-btn crit-damage ${
        levelCritDamage === 30 ? "crit-damage--max" : ""
      }`}
      onClick={upgradeCritDamage}
    >
      <span>Урон крита</span>
      {levelCritDamage !== 30 && (
        <>
          <span>+{nextUpgrade.toFixed(1)}x</span>
          <span>Цена: {critDamagePrice.toFixed(0)}</span>
        </>
      )}
      <span>Уровень: {levelCritDamage === 30 ? "Макс" : levelCritDamage}</span>
    </button>
  );
};

export default FooterCritDamage;
