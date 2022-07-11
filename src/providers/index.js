import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { GraficsProvider } from "./grafics";

const Providers = ({ children }) => {
  return (
    <GraficsProvider> 
      <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>{children}</DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
    </GraficsProvider>
  );
};

export default Providers;
