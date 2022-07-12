import Header from "../../components/Header"
import { Grafics } from "../../components/Grafics"
import EditPlanModal from "../../components/EditPlanModal"
import { FinancialTable } from "../../components/FinancialTable"
import { FinancialPlanModal } from "../../components/FinancialPlanModal"

import { useHistory } from "react-router-dom"

import { useState } from "react";
import { DashBoardTotal } from "../../components/DashBoardTotal"

const Dashboard = () => {
    const [postId, setPostId] = useState(undefined)

    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const history = useHistory()

    const [financialPlanModal, setFinancialPlanModal] = useState(false);
    const [editFinancialPlanModal, setEditFinancialPlanModal] = useState(false)

    const handleFinancialPlanModal = () => {
      if (financialPlanModal === false) {
        setFinancialPlanModal(true);
      } else {
        setFinancialPlanModal(false);
      }
    }
    
    const handleEditFinancialPlanModal = (event) => {
      if (editFinancialPlanModal === false) {
        setPostId(event.target.id)
        setEditFinancialPlanModal(true)
      } else {
        setEditFinancialPlanModal(false)
      }
    }

    if(token){
        return(
            <>
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

                <FinancialTable 
                  handleFinancialPlanModal={handleFinancialPlanModal} 
                  handleEditFinancialPlanModal={handleEditFinancialPlanModal}
                />

                <DashBoardTotal/>
                <Grafics/>
            </>
        )
    } else {
        history.push("/login")
    }
    
}

export default Dashboard