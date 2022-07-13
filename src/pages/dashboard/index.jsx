import Header from "../../components/Header";
import { Grafics } from "../../components/Grafics";
import EditPlanModal from "../../components/EditPlanModal";
import { FinancialTable } from "../../components/FinancialTable";
import { FinancialPlanModal } from "../../components/FinancialPlanModal";

import { useHistory } from "react-router-dom";

import { useContext} from "react";
import { DashBoardTotal } from "../../components/DashBoardTotal"
import { ModalContext } from "../../providers/modals"
import { StyledDashboard, StyleFinancial } from "./styles";

const Dashboard = () => {
    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const history = useHistory()

    const{playAdd, playEdit}= useContext(ModalContext);

  if(token){
      return(
        <>
          {playAdd && <FinancialPlanModal/>}
          {playEdit && <EditPlanModal/>}
          <Header/>
          <StyledDashboard>
            <StyleFinancial>
              <FinancialTable/>
              <DashBoardTotal/>
            </StyleFinancial>
              <Grafics/>
            
          </StyledDashboard>
        </>
      )
  } else {
      history.push("/login")
  }
    
};

export default Dashboard;
