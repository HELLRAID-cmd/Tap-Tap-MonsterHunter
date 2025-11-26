import { useGame } from "../../context/Context";
import { useCrit } from "../../context/CritContext";

const FooterCrit = () => {
  const { setNotEnoughCoins, coins, setCoins } = useGame();

  const { setAttackCrit, critLevel, setCritLevel, critPrice, setCritPrice } = useCrit();

  const nextUpgrade = 0.02;
  const nextLevel = critLevel + 1;

  const upgradeCrit = () => {
    // Проверка на то есть ли монеты
    if (coins < critPrice) {
      // Уведомление монет
      setNotEnoughCoins(true);

      setTimeout(() => {setNotEnoughCoins(false)}, 600);
      return;
    } else {
      setCoins(prev => prev - critPrice);
    }

    if(critLevel === 25) {
      return;
    }

    // Повышение крита
    setAttackCrit((prev) => {
      const upgrade = prev + nextUpgrade;
      return upgrade;
    });

    // Повышение уровня
    setCritLevel(nextLevel);

    // Повышение цены
    setCritPrice((prev) => +(prev * 1.4).toFixed(1));

    if(nextLevel === 10) {
      setCritPrice((prev) => +(prev * 1.7).toFixed(1));
    }

    if(nextLevel === 20) {
      const nextUpgrade = 0.04;

      setCritPrice((prev) => +(prev * 1.2).toFixed(1));

      setAttackCrit((prev) => {
      const upgrade = prev + nextUpgrade;
      return upgrade >= 0.67 ? 0.67 : upgrade;
    });
    }
  };

  return (
    <button className={`footer__skill-btn crit ${critLevel === 25 ? "crit--max": ""}`} onClick={upgradeCrit}>
      Крит шанс
      {critLevel !== 25 && (
        <>
          <span>+{(nextUpgrade * 100).toFixed(0)}%</span>
          <span>Цена: {critPrice.toFixed(0)}</span>
        </>
      )}
      <span>Уровень: {critLevel === 25 ? "Макс": critLevel}</span>
    </button>
  );
};

export default FooterCrit;
