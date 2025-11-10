// Монстр
export type MonsterProps = {
  health: number;
}

// Рестарт
export type HandleRestartType = {
  setMonsterHealth: (value: number) => void;
  setMaxHealth: (value: number) => void;
  newHealth: number;
  monsterHealth?: number;
}

// Поменять цвет
export type HandleChangeColorType = {
  setColor: (value: string) => void;
}

// Ударить монстра
export type HitMonsterType = {
  setMonsterHealth: React.Dispatch<React.SetStateAction<number>>;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  setAnimationDamage: React.Dispatch<React.SetStateAction<string>>;
  monsterHealth: number;
  setLastDamage: React.Dispatch<React.SetStateAction<number[]>>;
}

// Хп бар
export type HealthBar = {
  monsterHealth: number;
  maxHealth: number;
}