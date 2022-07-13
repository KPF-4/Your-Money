import { QuotationProvider } from "./quotation";
import { CoinsProvider } from "./coins";
import { DailyNewsProvider } from "./dailyNews";
import { ScrollProvider } from "./scroll";
import { GraficsProvider } from "./grafics";
import { ModalProvider } from "./modals";

const Providers = ({ children }) => {
  return (
            <ModalProvider>
    <GraficsProvider>
      <CoinsProvider>
        <QuotationProvider>
          <DailyNewsProvider>
              <ScrollProvider>
                {children}
              </ScrollProvider>
          </DailyNewsProvider>
        </QuotationProvider>
      </CoinsProvider>
    </GraficsProvider>
            </ModalProvider>
  );
};

export default Providers;
