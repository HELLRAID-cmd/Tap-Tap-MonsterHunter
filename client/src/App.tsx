import { Monster } from "./Components/Monster/Monster"
import getNewHealth from "./Components/Monster/getNewHealth";
import "./Styles/style.scss";

function App() {
  return (
    <>
      <Monster health={getNewHealth()} />
    </>
  )
}

export default App
