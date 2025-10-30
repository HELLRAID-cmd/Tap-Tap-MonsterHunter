import { Monster } from "./Components/Monster/Monster"

function App() {

  return (
    <>
      <Monster health={Math.floor(Math.random() * 10000) + 1} />
    </>
  )
}

export default App
