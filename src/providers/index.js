import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";

const Providers = ({ children }) => {
  return (
    <CoinsProvider>
      <QuotationProvider>
        <DailyNewsProvider>{children}</DailyNewsProvider>
      </QuotationProvider>
    </CoinsProvider>
  );
};

export default Providers;
