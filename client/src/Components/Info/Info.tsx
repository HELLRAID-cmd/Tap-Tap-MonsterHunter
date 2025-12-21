import { useGame } from "../context/Context";
import "./info.scss";
import "./InfoDemo.scss";
import InfoDemo from "./InfoDemo";
import { useEffect, useRef } from "react";

const Info = () => {
  const { setStartGame, startGame, setIsDemo, setIsDemoInfo, isDemoInfo } =
    useGame();
  const demoRef = useRef<HTMLDivElement | null>(null);
  const demoBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleBtn = () => {
    setIsDemo(false);
    setStartGame(true);
  };

  const handleDemo = () => {
    setIsDemo(true);
    setStartGame(true);
  };

  const handleDemoInfo = () => {
    setIsDemoInfo((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        isDemoInfo &&
        demoRef.current &&
        !demoRef.current.contains(target) &&
        demoBtnRef.current &&
        !demoBtnRef.current.contains(target)
      ) {
        setIsDemoInfo(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDemoInfo, setIsDemoInfo]);

  return (
    <>
      <div className={`info ${startGame ? "hidden" : ""}`}>
        <div className="info__text">
          <h1 className="info__text-title">Добро&nbsp;пожаловать!</h1>
          <h2 className="info__text-subtitle">
            Здесь тебя ждёт мини-игра, где ты&nbsp;будешь сражаться
            с&nbsp;монстрами, усиливать свою мощь за&nbsp;счет монет которые
            падают с&nbsp;мобов. Твоя главная цель&nbsp;&mdash; прокачаться как
            можно лучше и&nbsp;одолеть финального босса за&nbsp;минимальное
            время.
          </h2>
          <p className="info__text-paragraph">
            Чтобы сразиться с финальным боссом, тебе нужно прокачать свои навыки
            до определенного уровня.
          </p>
          <ul className="info__text-list">
            <li className="info__text-item">Уровень атаки: 110 уровень</li>
            <li className="info__text-item">Уровень шанса крита: 25 уровень</li>
            <li className="info__text-item">
              Уровень множителя крита: 25 уровень
            </li>
          </ul>
        </div>
        <div className="info__buttons">
          <button
            className="info__btn"
            onClick={() => {
              handleBtn();
            }}
          >
            Начать
          </button>
          <button className="info__btn-demo" onClick={handleDemo}>
            Начать демо режим
          </button>
        </div>
        <button className="info__btn-info" onClick={handleDemoInfo} ref={demoBtnRef}>
          {isDemoInfo ? "Закрыть информацию" : "Что за демо режим?"}
        </button>
      </div>

      {isDemoInfo && (
        <div className="info-demo" ref={demoRef}>
          <InfoDemo />
        </div>
      )}
    </>
  );
};

export default Info;
