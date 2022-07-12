import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { GraficsProvider } from "./grafics";
import { FeaturedNewsProvider } from "./featuredNews";

const Providers = ({ children }) => {
  return (
    <GraficsProvider>
      <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>
            <FeaturedNewsProvider>
              <ScrollProvider>{children}</ScrollProvider>
            </FeaturedNewsProvider>
          </DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
    </GraficsProvider>
  );
};

export default Providers;
