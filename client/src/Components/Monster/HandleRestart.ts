import type { HandleChangeColorType, HandleRestartType } from "./MonsterProps";

// Обновить игру
export const handleRestart = ({setMonsterHealth, setMaxHealth, newHealth}: HandleRestartType) => {
  setMonsterHealth(newHealth);
  setMaxHealth(newHealth);
}

// Рандомный цвет
export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b})`;
};

export const handleChangeColor = ({setColor}: HandleChangeColorType) => {
  setColor(getRandomColor());
}