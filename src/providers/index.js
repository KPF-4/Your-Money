import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { GraficsProvider } from "./grafics";

const Providers = ({ children }) => {
  return (
    <GraficsProvider>
      <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>
            <ScrollProvider>{children}</ScrollProvider>
          </DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
    </GraficsProvider>
  );
};

export default Providers;
