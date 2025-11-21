import { useGame } from "../context/Context";
import type { AdminBtn } from "./AdminProps";

const BtnAdmin = ({setMonsterHealth}: AdminBtn) => {
  const {setCoins} = useGame();
  
  // Добавить монеты
  const handleMoney = () => {
    setCoins(prev => prev + 1000000000000000)
  }

  // оставить 1хп
  const handleKill = () => {
    setMonsterHealth(1);
  };

  return (
    <>
    <button className='btn--admin-kill' onClick={handleKill}>1хп</button>
    <button className='btn--admin-money' onClick={handleMoney}>Монеты</button>
    </>
  )
}

export default BtnAdmin;