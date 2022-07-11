import { useHistory } from "react-router-dom";
import { Grafics } from "../../components/Grafics";
import Header from "../../components/Header";

const Dashboard = () => {
  const token = localStorage.getItem("@YOURMONEY-TOKEN");

  const history = useHistory();

  if (token) {
    return (
      <>
        <Header />
        <Grafics />
      </>
    );
  } else {
    history.push("/login");
  }
};

export default Dashboard;
