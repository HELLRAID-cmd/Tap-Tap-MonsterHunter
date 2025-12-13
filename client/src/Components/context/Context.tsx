import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  COINS,
  MONSTER_LEVEL,
  STATUS_CLICK,
  TOTAL_COINS,
  TOTAL_COINS_SPENT,
  TOTAL_DAMAGE,
} from "../Config/Config";
import { useCoinsFooter } from "./CoinsContext";

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
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  setNotEnoughCoins: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalDamage: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoinsSpent: React.Dispatch<React.SetStateAction<number>>;
  setStatusClick: React.Dispatch<React.SetStateAction<number>>;
  setLevelMonster: React.Dispatch<React.SetStateAction<number>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinalBoss: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [timerValue, setTimerValue] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { coinsFooter } = useCoinsFooter();

  // Добавление монет
  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * coinsFooter) + 1;
    setCoins((prev) => prev + randomNumber);
    setTotalCoins((prev) => prev + randomNumber);
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
  }

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
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
