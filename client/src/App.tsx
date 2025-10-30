import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";

function App() {

  return (
    <>
      <Monster health={Math.floor(Math.random() * 10000) + 1} />
    </>
  )
}

export default App
