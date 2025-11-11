import { useState } from "react";
import { NEW_HEALTH } from "./Components/Config/Config";
import Header from "./Components/Header/Header";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";

function App() {
  const [coins, setCoins] = useState(0);

  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setCoins(prev => prev + randomNumber);
  };

  return (
    <div className="game">
      <Header coins={coins}/>
      <Monster health={NEW_HEALTH} addCoins={addCoins}/>
    </div>
  )
}

export default App
