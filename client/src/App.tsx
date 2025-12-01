import { MONSTER_HEALTH } from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster";
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import StatusPlayer from "./Components/StatusPlayer/StatusPlayer";
import Info from "./Components/Info/Info";
import { useGame } from "./Components/context/Context";

function App() {
  const {startGame} = useGame();

  return (
    <>
      <Info />
      {startGame && (
        <>
          <main>
            <Monster health={MONSTER_HEALTH} />
            <StatusPlayer />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
