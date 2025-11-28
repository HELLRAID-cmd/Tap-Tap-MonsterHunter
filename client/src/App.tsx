import { MONSTER_HEALTH} from "./Components/Config/Config";
import { Monster } from "./Components/Monster/Monster"
import "./Styles/style.scss";
import "./Styles/_reset.scss";
import "./Styles/_container.scss";
import Footer from "./Components/Footer/Footer";
import StatusPlayer from "./Components/StatusPlayer/StatusPlayer";
import { Provider } from "./Components/context/Providers";
import Info from "./Components/Info/Info";

function App() {
  return (
    <Provider>
      <main>
        <Monster health={MONSTER_HEALTH} />
        <StatusPlayer />
        <Info />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
