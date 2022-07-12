import { createContext, useEffect, useState } from "react";
import ApiFake from "../../Service/api_fake";

export const GraficsContext = createContext([]);

export const GraficsProvider = ( {children} ) => {
    const [playDashboad, setPlayDashboard] = useState(false)
    const [data, setData] = useState([])

  const token = localStorage.getItem("@YOURMONEY-TOKEN");
  const id = localStorage.getItem("@YOURMONEY-ID");

  const requisition = async () => {
    await ApiFake.get(`/financeiro?userId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setData(response.data);
        setPlayDashboard(false);
      })
      .catch((error) => {
        console.log(error);
        setPlayDashboard(false);
      });
  };

  useEffect(() => {
    playDashboad && requisition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playDashboad]);

  return (
    <GraficsContext.Provider value={{ setPlayDashboard, data }}>
      {children}
    </GraficsContext.Provider>
  );
};
