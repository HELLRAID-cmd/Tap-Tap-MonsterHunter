import { Monster } from "./Components/Monster/Monster"
import getNewHealth from "./Components/Monster/newHealthMonster";
import "./Styles/style.scss";

function App() {
  return (
    <>
      <Monster health={getNewHealth()} />
    </>
  )
}

export default App
