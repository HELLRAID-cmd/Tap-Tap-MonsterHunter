import type { HandleChangeColorType, HandleRestartType } from "./MonsterProps";

export const useMonsterActions = () => {

  // Обновить игру
  const handleRestart = ({setMonsterHealth, setMaxHealth, newHealth}: HandleRestartType) => {
    setMonsterHealth(newHealth);
    setMaxHealth(newHealth);
  }

  // Рандомный цвет
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b})`;
  };

  const handleChangeColor = ({setColor}: HandleChangeColorType) => {
    setColor(getRandomColor());
  }

  return {handleRestart, getRandomColor, handleChangeColor};
}