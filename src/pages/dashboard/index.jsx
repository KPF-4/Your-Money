import Header from "../../components/Header"
import { Grafics } from "../../components/Grafics"
import EditPlanModal from "../../components/EditPlanModal"
import { FinancialTable } from "../../components/FinancialTable"
import { FinancialPlanModal } from "../../components/FinancialPlanModal"

import { useHistory } from "react-router-dom"

import { GraficsContext } from "../../providers/grafics"

import { useState } from "react";
import { useContext } from "react"
import { DashBoardTotal } from "../../components/DashBoardTotal"

const Dashboard = () => {

  const {setData, data} = useContext(GraficsContext);
  const [postId, setPostId] = useState(undefined)
  
  const token = localStorage.getItem("@YOURMONEY-TOKEN")
  const history = useHistory()
  
  const [financialPlanModal, setFinancialPlanModal] = useState(false);
  const [editFinancialPlanModal, setEditFinancialPlanModal] = useState(false)
  
  const handleFinancialPlanModal = (event) => {
    if (financialPlanModal === false) {
      setFinancialPlanModal(true);
    } else {
      setFinancialPlanModal(false);
    }
  }
  
  const handleEditFinancialPlanModal = (event) => {
    if (editFinancialPlanModal === false) {
      setEditFinancialPlanModal(true)
      setPostId(event.target.id)
    } else {
      setEditFinancialPlanModal(false)
    }
  }
  
  if(token){
      return(
          <>
              <Header />
              <Grafics/>
              <FinancialPlanModal 
                financialPlanModal={financialPlanModal}
                handleFinancialPlanModal={handleFinancialPlanModal}
              />

              <EditPlanModal
                postId={postId}
                data={data} 
                handleModal={handleEditFinancialPlanModal}
                modal={editFinancialPlanModal}
              />

              <FinancialTable 
                data={data}
                handleFinancialPlanModal={handleFinancialPlanModal} 
                handleEditFinancialPlanModal={handleEditFinancialPlanModal}
              />

              <DashBoardTotal data={data}/>
          </>
      )
  } else {
      history.push("/login")
  }
    
}

export default Dashboard
