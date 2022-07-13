import Header from "../../components/Header";
import { Grafics } from "../../components/Grafics";
import EditPlanModal from "../../components/EditPlanModal";
import { FinancialTable } from "../../components/FinancialTable";
import { FinancialPlanModal } from "../../components/FinancialPlanModal";

import { useHistory } from "react-router-dom";

import { useState } from "react";
import { DashBoardTotal } from "../../components/DashBoardTotal";
import { StyledDashboard } from "./styles";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import SearchDashboard from "../../components/SearchDashboard";
import FilterDashboard from "../../components/FilterDashboard";

const Dashboard = () => {
  const [postId, setPostId] = useState(undefined);

  const token = localStorage.getItem("@YOURMONEY-TOKEN");
  const history = useHistory();

  const [financialPlanModal, setFinancialPlanModal] = useState(false);
  const [editFinancialPlanModal, setEditFinancialPlanModal] = useState(false);

  const handleFinancialPlanModal = () => {
    if (financialPlanModal === false) {
      setFinancialPlanModal(true);
    } else {
      setFinancialPlanModal(false);
    }
  };

  const handleEditFinancialPlanModal = (event) => {
    if (editFinancialPlanModal === false) {
      setPostId(event.target.id);
      setEditFinancialPlanModal(true);
    } else {
      setEditFinancialPlanModal(false);
    }
  };

  if (token) {
    return (
      <StyledDashboard>
        <Header />
        <FinancialPlanModal
          financialPlanModal={financialPlanModal}
          handleFinancialPlanModal={handleFinancialPlanModal}
        />
        <EditPlanModal
          postId={postId}
          handleModal={handleEditFinancialPlanModal}
          modal={editFinancialPlanModal}
        />

        <SearchDashboard />
        <FilterDashboard />

        <FinancialTable
          handleFinancialPlanModal={handleFinancialPlanModal}
          handleEditFinancialPlanModal={handleEditFinancialPlanModal}
        />
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
