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
    <main>
      <Header coins={coins}/>
      <Monster health={NEW_HEALTH} addCoins={addCoins}/>
    </main>
  )
}

export default App
