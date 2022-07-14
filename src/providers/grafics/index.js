import { createContext, useEffect, useState } from "react";
import ApiFake from "../../Service/api_fake";

export const GraficsContext = createContext([]);

export const GraficsProvider = ({ children }) => {
  const [playDashboad, setPlayDashboard] = useState(false);
  const [data, setData] = useState([]);
  const [dataResponse, setDataResponse] = useState([]);

  const token = localStorage.getItem("@YOURMONEY-TOKEN");
  const id = localStorage.getItem("@YOURMONEY-ID");

  const requisition = async () => {
    await ApiFake.get(`/financeiro?userId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDataResponse(response.data);
        setData(response.data);
        setPlayDashboard(false);
      })
      .catch((error) => {
        setPlayDashboard(false);
      });
  };

  const filterData = (input) => {
    if (input !== "") {
      setData(
        dataResponse.filter(
          (element) =>
            element.nome.toLowerCase().includes(input.toLowerCase()) ||
            element.tipo.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setData(dataResponse);
    }
  };

  useEffect(() => {
    playDashboad && requisition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playDashboad]);

  return (
    <GraficsContext.Provider value={{ setPlayDashboard, data, filterData }}>
      {children}
    </GraficsContext.Provider>
  );
};
