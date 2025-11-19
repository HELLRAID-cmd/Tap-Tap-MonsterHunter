// import { useState } from "react";
import { NEW_HEALTH } from "./Components/Config/Config";
<<<<<<< HEAD
import Header from "./Components/Header/Header";
import { Monster } from "./Components/Monster/Monster";
=======
import { Monster } from "./Components/Monster/Monster"
>>>>>>> header
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import { GameProvider } from "./Components/context/Context";

function App() {
  return (
<<<<<<< HEAD
    <GameProvider>
      <Header />
      <main>
        <Monster health={NEW_HEALTH} />
      </main>
      <Footer />
    </GameProvider>
  );
=======
    <>
      <Monster health={NEW_HEALTH} />
    </>
  )
>>>>>>> header
}

export default App;
