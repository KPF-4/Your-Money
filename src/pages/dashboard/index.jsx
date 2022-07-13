import Header from "../../components/Header";
import { Grafics } from "../../components/Grafics";
import EditPlanModal from "../../components/EditPlanModal";
import { FinancialTable } from "../../components/FinancialTable";
import { FinancialPlanModal } from "../../components/FinancialPlanModal";

import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { DashBoardTotal } from "../../components/DashBoardTotal";
import { ModalContext } from "../../providers/modals";
import { StyledDashboard } from "./styles";
import Footer from "../../components/Footer";
import SearchDashboard from "../../components/SearchDashboard";
import FilterDashboard from "../../components/FilterDashboard";

const Dashboard = () => {
  const token = localStorage.getItem("@YOURMONEY-TOKEN");
  const history = useHistory();

  const { playAdd, playEdit } = useContext(ModalContext);

  if (token) {
    return (
      <StyledDashboard>
        {playAdd && <FinancialPlanModal />}
        {playEdit && <EditPlanModal />}
        <Header />
        <SearchDashboard />
        <FilterDashboard />
        <FinancialTable />
        <DashBoardTotal />
        <Grafics />
        <Footer />
      </StyledDashboard>
    );
  } else {
    history.push("/login");
  }
};

export default Dashboard;
