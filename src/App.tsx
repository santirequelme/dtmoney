import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#yourAppElement');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}>
                   <h2>cadastrar</h2> 
                </Modal>
      <GlobalStyle />
    </>
  );
}
