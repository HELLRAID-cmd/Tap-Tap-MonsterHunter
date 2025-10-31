type handleKillType = {
  setMonsterHealth: (value: number) => void;
}

// оставить 1хп
const handleKill = ({setMonsterHealth}: handleKillType) => {
  setMonsterHealth(1);
};

export default handleKill;