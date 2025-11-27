import { useAttackDamage } from "../../context/AttackContext";
import { useGame } from "../../context/Context";

const FooterAttack = () => {
  const { setNotEnoughCoins, setTotalCoinsSpent, coins, setCoins } = useGame();
  const { setAttack, level, setLevel, price, setPrice } = useAttackDamage();

  const nextUpgrade = +(level * 0.40).toFixed(2);
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
    setPrice((prev) => +(prev * 1.10).toFixed(1));

    if (nextLevel === 10) {
      setAttack((prev) => +(prev + nextUpgrade * 1.80).toFixed(2));
    }

    if (nextLevel === 20) {
      setAttack((prev) => +(prev + nextUpgrade * 1.50).toFixed(2));
    }

    if (nextLevel === 50) {
      setAttack((prev) => +(prev + nextUpgrade * 0.55).toFixed(2));
    }
  };

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>
      <span>Атака</span>
      <span>+{nextUpgrade}</span>
      <span>Цена: {price.toFixed(0)}</span>
      <span>Уровень: {level}</span>
    </button>
  );
};

export default FooterAttack;
