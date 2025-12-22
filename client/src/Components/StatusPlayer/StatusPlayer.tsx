import { useAttackDamage } from "../context/AttackContext";
import { useCoinsFooter } from "../context/CoinsContext";
import { useCrit } from "../context/CritContext";
import { useCritDamage } from "../context/CritDamageContext";
import "./statusPlayer.scss";

const StatusPlayer = () => {
  const { attack } = useAttackDamage();
  const { attackCrit } = useCrit();
  const { critDamage } = useCritDamage();
  const { coinsMultiplier } = useCoinsFooter();

  return (
    <div className="status">
      <div className="container">
        <ul className="status__list">
          <li className="status__item">
            <p className="status__item-name">Атака: </p>
            <span className="status__item-info">{attack}</span>
          </li>
          <li className="status__item">
            <p className="status__item-name">Шанс крит: </p>
            <span className="status__item-info">
              {(attackCrit * 100).toFixed(0)}%
            </span>
          </li>
          <li className="status__item">
            <p className="status__item-name">Множитель крита: </p>
            <span className="status__item-info">{critDamage.toFixed(1)}x</span>
          </li>
          <li className="status__item">
            <p className="status__item-name">Множитель монет: </p>
            <span className="status__item-info">
              {coinsMultiplier.toFixed(1)}x
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatusPlayer;
