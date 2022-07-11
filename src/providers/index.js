import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";

const Providers = ({ children }) => {
  return (
    <CoinsProvider>
      <QuotationProvider>
        <DailyNewsProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </DailyNewsProvider>
      </QuotationProvider>
    </CoinsProvider>
  );
};

export default Providers;
