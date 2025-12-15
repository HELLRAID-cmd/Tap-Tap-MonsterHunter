import { useGame } from "../context/Context";
import "./info.scss";

const Info = () => {
  const {startTimer, setStartGame, startGame} = useGame();

  const handleBtn = () => {
    setStartGame(true);
  }

  return (
    <div className={`info ${startGame ? "hidden" : "" }`}>
      <div className="info__text">
        <h1 className="info__text-title">Добро&nbsp;пожаловать!</h1>
        <h2 className="info__text-subtitle">
          Здесь тебя ждёт мини-игра, где ты&nbsp;будешь сражаться
          с&nbsp;монстрами, усиливать свою мощь за&nbsp;счет монет
          которые падают с&nbsp;мобов. Твоя главная цель&nbsp;&mdash;
          прокачаться как можно лучше и&nbsp;одолеть финального босса
          за&nbsp;минимальное время.
        </h2>
      </div>
      <button className="info__btn" onClick={() => {
        startTimer();
        handleBtn();
      }}>Начать</button>
    </div>
  );
};

export default Info;
