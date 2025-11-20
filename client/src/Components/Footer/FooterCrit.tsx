import { useGame } from "../context/Context";

const FooterCrit = () => {
  const { setAttackCrit, critLevel, setCritLevel, critPrice, setCritPrice, coins } = useGame();

  const nextUpgrade = 0.02;
  const nextLevel = critLevel + 1;

  const upgradeCrit = () => {
    // Проверка на то есть ли монеты
    if (coins < critPrice) {
      return;
    }

    if(critLevel === 25) {
      return;
    }

    // Повышение крита
    setAttackCrit((prev) => {
      const upgrade = prev + nextUpgrade;
      console.log("Улучшено", (upgrade * 100).toFixed(0) + "%");
      return upgrade >= 0.67 ? 0.67 : upgrade;
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
      console.log("Улучшено", (upgrade * 100).toFixed(0) + "%");
      return upgrade >= 0.67 ? 0.67 : upgrade;
    });
    }
  };

  return (
    <button className="footer__skill-btn crit" onClick={upgradeCrit}>
      Крит шанс
      <span>+{(nextUpgrade * 100).toFixed(0)}%</span>
      <span>Цена: {critPrice}</span>
      <span>Уровень: {critLevel}</span>
    </button>
  );
};

export default FooterCrit;
