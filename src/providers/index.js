import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { GraficsProvider } from "./grafics";
import { FeaturedNewsProvider } from "./featuredNews";
import { SimulatorProvider } from "./simulator";

const Providers = ({ children }) => {
  return (
    <GraficsProvider>
      <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>
            <FeaturedNewsProvider>
              <SimulatorProvider>
                <ScrollProvider>{children}</ScrollProvider>
              </SimulatorProvider>
            </FeaturedNewsProvider>
          </DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
    </GraficsProvider>
  );
};

export default Providers;
