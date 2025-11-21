// import { useState } from "react";
import { HEALTH } from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import { GameProvider } from "./Components/context/Context";
import StatusPlayer from "./Components/StatusPlayer/StatusPlayer";

function App() {
  return (
    <GameProvider>
      <main>
        <Monster health={HEALTH} />
        <StatusPlayer />
      </main>
      <Footer />
    </GameProvider>
  );
}

export default App;
