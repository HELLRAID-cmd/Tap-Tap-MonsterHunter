import { NEW_HEALTH } from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";

function App() {
  return (
    <>
      <Monster health={NEW_HEALTH} />
    </>
  )
}

export default App
