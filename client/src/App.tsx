import { MONSTER_HEALTH } from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster";
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import StatusPlayer from "./Components/StatusPlayer/StatusPlayer";
import Info from "./Components/Info/Info";
import { useGame } from "./Components/context/Context";
import FinalBoss from "./Components/FinalBoss/FinalBoss";

function App() {
  const { startGame, isFinalBoss } = useGame();

  // Если кнопка не нажата показываем инфу
  if (!startGame && !isFinalBoss) {
    return <Info />;
  }

  // Если бой с боссом, то показывается только он
  if (isFinalBoss) {
    return <FinalBoss />;
  }

  return (
    <>
      <main>
        <Monster health={MONSTER_HEALTH} />
        <StatusPlayer />
      </main>
      <Footer />
    </>
  );
}

export default App;
