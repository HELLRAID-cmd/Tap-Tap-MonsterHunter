import { NEW_HEALTH } from "./Components/Config/Config";
import Header from "./Components/Header/Header";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";

function App() {
  return (
    <>
      <Header/>
      <Monster health={NEW_HEALTH} />
    </>
  )
}

export default App
