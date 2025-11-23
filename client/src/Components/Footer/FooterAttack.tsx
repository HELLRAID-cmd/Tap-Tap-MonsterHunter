import { useAttackDamage } from "../context/AttackContext";
import { useGame } from "../context/Context";

const FooterAttack = () => {
  const { setNotEnoughCoins, setTotalCoinsSpent, coins, setCoins } = useGame();
  const { setAttack, level, setLevel, price, setPrice } = useAttackDamage();

  const nextUpgrade = +(level * 0.20).toFixed(2);
  const nextLevel = level + 1;

  const upgradeAttack = () => {
    // Проверка на монеты
    if(coins < price) {
      setNotEnoughCoins(true);

      setTimeout(() => {setNotEnoughCoins(false)}, 600);
      return;
    } else {
      setCoins(prev => prev - price);
      setTotalCoinsSpent(prev => prev + price);
    }

    // Повышение атаки
    setAttack((prev) => +(prev + nextUpgrade).toFixed(2));

    // Повышение уровня
    setLevel(nextLevel);

    // Повышение цены
    setPrice((prev) => +(prev * 1.15).toFixed(1));

    if (nextLevel === 10) {
      setAttack((prev) => +(prev + nextUpgrade * 1.10).toFixed(2));
      setPrice((prev) => +(prev * 1.02).toFixed(1));
    }

    if (nextLevel === 20) {
      setAttack((prev) => +(prev + nextUpgrade * 0.90).toFixed(2));
      setPrice((prev) => +(prev * 0.70).toFixed(1));
    }

    if (nextLevel === 50) {
      setAttack((prev) => +(prev + nextUpgrade * 0.25).toFixed(2));
      setPrice((prev) => +(prev * 0.05).toFixed(1));
    }
  };

  return (
    <button className={`footer__skill-btn attack ${level === 100 ? "attack--max": ""}`} onClick={upgradeAttack}>
      Атака
      {level !== 100 && (
        <>
        <span>+{nextUpgrade}</span>
        <span>Цена: {price.toFixed(0)}</span>
        </>
      )}
      <span>Уровень: {level === 100 ? "Макс" : level}</span>
    </button>
  );
};

export default FooterAttack;
