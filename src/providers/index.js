import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { GraficsProvider } from "./grafics";

const Providers = ({ children }) => {
  return (
    <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>
            <GraficsProvider>
              {children}
            </GraficsProvider>
          </DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
  );
};

export default Providers;
