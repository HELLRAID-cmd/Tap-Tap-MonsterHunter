import { FinalBossProvider } from "../FinalBoss/FinalBossContext";
import { AttackProvider } from "./AttackContext";
import { CoinsProvider } from "./CoinsContext";
import { GameProvider } from "./Context";
import { CritProvider } from "./CritContext";
import { CritDamageProvider } from "./CritDamageContext";

const providersArr = [GameProvider, AttackProvider, CritProvider,CritDamageProvider, CoinsProvider, FinalBossProvider];

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return providersArr.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};
