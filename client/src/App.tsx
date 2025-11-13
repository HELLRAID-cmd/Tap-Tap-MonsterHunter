import { useState } from "react";
import { NEW_HEALTH } from "./Components/Config/Config";
import Header from "./Components/Header/Header";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";
import "./Styles/_reset.scss"
import "./Styles/_container.scss"
import Footer from "./Components/Footer/Footer";
import { GameProvider } from "./Components/context/Context";

function App() {
  // Монеты
  const [coins, setCoins] = useState(0);

  // Улучшение атаки
  const [attack, setAttack] = useState(1);

  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setCoins(prev => prev + randomNumber);
  };

  return (
    <GameProvider>
      <main>
        <Header coins={coins}/>
        <Monster health={NEW_HEALTH} addCoins={addCoins} attack={attack}/>
      </main>
      <Footer setAttack={setAttack}/>
    </GameProvider>
  )
}

export default App
