import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grafics } from "../../components/Grafics";
import Header from "../../components/Header";

const Dashboard = () => {
  const token = localStorage.getItem("@YOURMONEY-TOKEN");

  const history = useHistory();

  useEffect(() => {
    !token && history.push("/login");
  }, []);

  return (
    <>
      <Header />
      <Grafics />
    </>
  );
};

export default Dashboard;
