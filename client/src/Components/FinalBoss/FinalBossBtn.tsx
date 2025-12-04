import { useGame } from "../context/Context";
import "./FinalBoss.scss";

const FinalBossBtn = () => {
  const {setIsFinalBoss} = useGame();

  return (
    <button className="final-boss__btn" onClick={() => setIsFinalBoss(true)}>Сразиться с финальным боссом</button>
  )
}

export default FinalBossBtn;