import getNewHealth from "../getNewHealth";
import type { HandleChangeColorType, HandleRestartType } from "../MonsterProps";
import { useMonsterActions } from "../useMonsterActions ";

const BtnRestart = ({ setMonsterHealth, setMaxHealth, monsterHealth, setColor }: HandleRestartType & HandleChangeColorType) => {
  const { handleRestart, handleChangeColor } = useMonsterActions();
  
  return (
    <button
      className={`btn-hidden ${monsterHealth === 0 ? "btn-restart btn" : ""}`}
      onClick={() => {
        const newHealth = getNewHealth();
        handleRestart({ setMonsterHealth, setMaxHealth, newHealth });
        handleChangeColor({ setColor });
      }}
    >
      Начать с начала
    </button>
  );
};

export default BtnRestart;
