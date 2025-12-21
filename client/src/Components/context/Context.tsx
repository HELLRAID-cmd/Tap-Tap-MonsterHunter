import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  ATTACK_BONUS_MONEY,
  COINS,
  CRIT_BONUS_MONEY,
  CRIT_DAMAGE_BONUS_MONEY,
  DEMO_INFO,
  DEMO_GAME,
  MONSTER_LEVEL,
  STATUS_CLICK,
  TOTAL_COINS,
  TOTAL_COINS_SPENT,
  TOTAL_DAMAGE,
} from "../Config/Config";
import { useCoinsFooter } from "./CoinsContext";
import { useCritDamage } from "./CritDamageContext";
import { useAttackDamage } from "./AttackContext";
import { useCrit } from "./CritContext";

type GameContextType = {
  coins: number;
  notEnoughCoins: boolean;
  totalDamage: number;
  totalCoins: number;
  totalCoinsSpent: number;
  statusClick: number;
  levelMonster: number;
  timerValue: number;
  startGame: boolean;
  isFinalBoss: boolean;
  isDemo: boolean;
  isDemoInfo: boolean;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  setNotEnoughCoins: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalDamage: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoinsSpent: React.Dispatch<React.SetStateAction<number>>;
  setStatusClick: React.Dispatch<React.SetStateAction<number>>;
  setLevelMonster: React.Dispatch<React.SetStateAction<number>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinalBoss: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDemo: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDemoInfo: React.Dispatch<React.SetStateAction<boolean>>;
  startTimer: () => void;
  stopTimer: () => void;
  addCoins: () => void;
  restartGame: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState(COINS);
  const [notEnoughCoins, setNotEnoughCoins] = useState(false);
  const [totalDamage, setTotalDamage] = useState(TOTAL_DAMAGE);
  const [totalCoins, setTotalCoins] = useState(TOTAL_COINS);
  const [totalCoinsSpent, setTotalCoinsSpent] = useState(TOTAL_COINS_SPENT);
  const [statusClick, setStatusClick] = useState(STATUS_CLICK);
  const [levelMonster, setLevelMonster] = useState(MONSTER_LEVEL);
  const [startGame, setStartGame] = useState(false);
  const [isFinalBoss, setIsFinalBoss] = useState(false);
  const [isDemo, setIsDemo] = useState(DEMO_GAME);
  const [isDemoInfo, setIsDemoInfo] = useState(DEMO_INFO);

  const [timerValue, setTimerValue] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const { coinsFooter } = useCoinsFooter();
  const { critLevelDamage } = useCritDamage();
  const { attack } = useAttackDamage();
  const { critLevel } = useCrit();

  // Добавление монет
  const addCoins = () => {
    const baseRandom = Math.floor(Math.random() * coinsFooter) + 1;

    // Бонусные монеты от множителя крита, от уровня
    const bonusCoinsCritDamage = Math.max(0, critLevelDamage - 1) * CRIT_DAMAGE_BONUS_MONEY;

    // Бонусные монеты от крита, от уровня
    const bonusCoinsCrit = Math.max(0, critLevel - 1) * CRIT_BONUS_MONEY;

    // Бонусные монеты от урона, от урона на 10 уровне
    const bonusCoinsAttack = Math.max(0, attack - 10) * ATTACK_BONUS_MONEY;

    // Общая награда
    const totalReward =
      baseRandom + bonusCoinsAttack + bonusCoinsCritDamage + bonusCoinsCrit;

    setCoins((prev) => prev + totalReward);
    setTotalCoins((prev) => prev + totalReward);
  };

  // Рестарт игры
  const restartGame = () => {
    setStartGame(false);
    setIsFinalBoss(false);
    setTotalDamage(TOTAL_DAMAGE);
    setTotalCoins(TOTAL_COINS);
    setTotalCoinsSpent(TOTAL_COINS_SPENT);
    setStatusClick(STATUS_CLICK);
    setLevelMonster(MONSTER_LEVEL);
    setCoins(COINS);
  };

  // Запуск таймера
  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimerValue((prev) => prev + 1);
    }, 1000);
  };

  // Остановка таймера
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!startGame) {
      stopTimer();
      setTimerValue(0);
      return;
    }

    startTimer();

    return () => stopTimer();
  }, [startGame]);

  return (
    <GameContext.Provider
      value={{
        coins,
        setCoins,
        addCoins,
        notEnoughCoins,
        setNotEnoughCoins,
        totalDamage,
        setTotalDamage,
        totalCoins,
        setTotalCoins,
        totalCoinsSpent,
        setTotalCoinsSpent,
        statusClick,
        setStatusClick,
        levelMonster,
        setLevelMonster,
        startTimer,
        stopTimer,
        timerValue,
        startGame,
        setStartGame,
        isFinalBoss,
        setIsFinalBoss,
        restartGame,
        isDemo,
        setIsDemo,
        isDemoInfo,
        setIsDemoInfo
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
