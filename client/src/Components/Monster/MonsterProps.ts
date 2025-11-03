export type MonsterProps = {
  health: number;
}

export type handleRestartType = {
  setMonsterHealth: (value: number) => void;
  setMaxHealth: (value: number) => void;
  newHealth: number;
}

export type handleChangeColorType = {
  setColor: (value: string) => void;
}

export type hitMonsterType = {
  setMonsterHealth: React.Dispatch<React.SetStateAction<number>>;
}