import handleKill from "./Admin";
import type { AdminBtn } from "./AdminProps";

const BtnAdmin = ({setMonsterHealth}: AdminBtn) => {
  return (
    <button className='btn' onClick={() => handleKill({setMonsterHealth})}>1хп</button>
  )
}

export default BtnAdmin;