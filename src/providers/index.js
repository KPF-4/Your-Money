import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { GraficsProvider } from "./grafics";
import { ModalProvider } from "./modals";
import { FeaturedNewsProvider } from "./featuredNews";
import { SimulatorProvider } from "./simulator";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
};

export default Providers;
