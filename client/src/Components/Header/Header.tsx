import Coins from "../Coins/Coins";
import "./Header.scss";

const Header = ({ coins }: { coins: number }) => {
  return (
    <header className="header">
      <Coins coins={coins}/>
    </header>
  )
}

export default Header;