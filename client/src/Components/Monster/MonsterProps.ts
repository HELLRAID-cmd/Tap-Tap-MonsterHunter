export type MonsterProps = {
  health: number;
}

export type HandleRestartType = {
  setMonsterHealth: (value: number) => void;
  setMaxHealth: (value: number) => void;
  newHealth: number;
  monsterHealth?: number;
}

export type HandleChangeColorType = {
  setColor: (value: string) => void;
}

export type HitMonsterType = {
  setMonsterHealth: React.Dispatch<React.SetStateAction<number>>;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  monsterHealth: number;
  setLastDamage: React.Dispatch<React.SetStateAction<number | null>>;
}

export type HealthBar = {
  monsterHealth: number;
  maxHealth: number;
}