import { useGame } from "../context/Context";
import "./statusPlayer.scss";

const StatusPlayer = () => {
  const {attack, attackCrit, totalDamage, totalCoins, totalCoinsSpent, statusClick} = useGame();

  return (
    <div className="status">
      <ul className="status__list">
        <li className="status__item">
          <p className="status__item-name">Атака: </p>
          <span className="status__item-info">{attack}</span>
        </li>
        <li className="status__item">
          <p className="status__item-name">Шанс крит: </p>
          <span className="status__item-info">{(attackCrit * 100).toFixed(0)}%</span>
        </li>
        <li className="status__item">
          <p className="status__item-name">Нанесено урона: </p>
          <span className="status__item-info">{totalDamage}</span>
        </li>
        <li className="status__item">
          <p className="status__item-name">Накоплено монет: </p>
          <span className="status__item-info">{totalCoins}</span>
        </li>
        <li className="status__item">
          <p className="status__item-name">Потрачено монет: </p>
          <span className="status__item-info">{(totalCoinsSpent).toFixed(0)}</span>
        </li>
        <li className="status__item">
          <p className="status__item-name">Всего ударов: </p>
          <span className="status__item-info">{statusClick}</span>
        </li>
      </ul>
    </div>
  )
}

export default StatusPlayer;