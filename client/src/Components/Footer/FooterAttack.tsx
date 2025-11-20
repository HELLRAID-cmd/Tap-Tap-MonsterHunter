import { useGame } from "../context/Context";

const FooterAttack = () => {
  const { setAttack, attack, level, setLevel, price, setPrice, coins } = useGame();

  const nextUpgrade = +(attack * 0.03).toFixed(2);
  const nextLevel = level + 1;

  const upgradeAttack = () => {

    // Проверка на то есть ли монеты
    if(coins < price) {
      return;
    }

    // Повышение атаки
    setAttack((prev) => +(prev + prev * 0.03).toFixed(2));

    // Повышение уровня
    setLevel(nextLevel);

    // Повышение цены
    setPrice((prev) => +(prev * 1.15).toFixed(1));

    if (nextLevel === 10) {
      setAttack((prev) => +(prev + prev * 0.05).toFixed(2));
      setPrice((prev) => +(prev * 2).toFixed(1));
      console.log("Уровень: ", nextLevel);
    }

    if (nextLevel === 20) {
      setAttack((prev) => +(prev + prev * 0.1).toFixed(2));
      setPrice((prev) => +(prev * 2.30).toFixed(1));
      console.log("Уровень: ", nextLevel);
    }

    if (nextLevel === 50) {
      setAttack((prev) => +(prev + prev * 0.15).toFixed(2));
      setPrice((prev) => +(prev * 3).toFixed(1));
      console.log("Уровень: ", nextLevel);
    }
  };

  return (
    <button className="footer__skill-btn attack" onClick={upgradeAttack}>
      Атака
      <span>+{nextUpgrade}</span>
      <span>Цена: {price}</span>
      <span>Уровень: {level}</span>
    </button>
  );
};

export default FooterAttack;
