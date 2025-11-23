import { AttackProvider } from "./AttackContext";
import { GameProvider } from "./Context";
import { CritProvider } from "./CritContext";
import { CritDamageProvider } from "./CritDamageContext";

const providersArr = [GameProvider, AttackProvider, CritProvider,CritDamageProvider];

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return providersArr.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};
