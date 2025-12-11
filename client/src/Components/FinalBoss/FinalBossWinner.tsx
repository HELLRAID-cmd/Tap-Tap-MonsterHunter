import { useFinalBoss } from "./FinalBossContext";

const FinalBossWinner = () => {
  const {setFinalBossShowStatus} = useFinalBoss();

  const handleShowStatus = () => {
    setFinalBossShowStatus(true);
  }

  return (
    <div className="final-boss__winner">
      <button className="btn" onClick={handleShowStatus}>Показать статистику</button>
    </div>
  )
}

export default FinalBossWinner;