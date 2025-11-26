import { useCoinsFooter } from "../../context/CoinsContext"
import { useGame } from "../../context/Context";

const FooterCoins = () => {
  const {coins, setCoins, setNotEnoughCoins, setTotalCoinsSpent} = useGame();
  const {coinsFooterLevel, setCoinsFooterLevel, coinsFooterPrice, setCoinsFooterPrice, setCoinsFooter, setCoinsMultiplier} = useCoinsFooter();

  const nextUpgrade = +(1.25 * 1.90).toFixed(2);
  const nextUpgradePrice = 1.90;
  const nextLevel = coinsFooterLevel + 1;

  const upgradeAttack = () => {
    // Проверка на монеты
    if(coins < coinsFooterPrice) {
      setNotEnoughCoins(true);

      setTimeout(() => {setNotEnoughCoins(false)}, 600);
      return;
    } else {
      setCoins(prev => prev - coinsFooterPrice);
      setTotalCoinsSpent(prev => prev + coinsFooterPrice);
    }

    // Повышение монет
    setCoinsFooter((prev) => +(prev * nextUpgrade).toFixed(2));

    // Повышение множителя
    setCoinsMultiplier((prev) => prev + nextUpgrade);

    // Повышение уровня
    setCoinsFooterLevel(nextLevel);

    // Повышение цены
    setCoinsFooterPrice((prev) => +(prev * nextUpgradePrice).toFixed(1));
  };
  
  return (
     <button className={`footer__skill-btn coins ${coinsFooterLevel === 10 ? "coins--max": ""}`} onClick={upgradeAttack}>
      <span>Множитель монет</span>
      {coinsFooterLevel !== 10 && (
        <>
        <span>+{nextUpgrade}x</span>
        <span>Цена: {coinsFooterPrice.toFixed(0)}</span>
        </>
      )}
      <span>Уровень: {coinsFooterLevel === 10 ? "Макс" : coinsFooterLevel}</span>
    </button>
  )
}

export default FooterCoins;