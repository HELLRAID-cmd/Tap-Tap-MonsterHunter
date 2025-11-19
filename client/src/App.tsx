// import { useState } from "react";
import { NEW_HEALTH } from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import { GameProvider } from "./Components/context/Context";

function App() {
  return (
    <GameProvider>
      <main>
        <Monster health={NEW_HEALTH} />
      </main>
      <Footer />
    </GameProvider>
  );
}

export default App;
