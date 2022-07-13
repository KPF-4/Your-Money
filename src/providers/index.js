import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { SimulatorProvider } from "./simulator";

const Providers = ({ children }) => {
  return (
    <CoinsProvider>
      <QuotationProvider>
        <DailyNewsProvider>
          <SimulatorProvider>
            <ScrollProvider>{children}</ScrollProvider>
          </SimulatorProvider>
        </DailyNewsProvider>
      </QuotationProvider>
    </CoinsProvider>
  );
};

export default Providers;
