import "./App.css";
import Header from "./components/Header";
import Table from "./components/table/Table";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const classes = {
    body: "h-screen bg-gray-900 text-white",
  };

  const showModal = useSelector((state) => state.modal.showModal);

  return (
    <div className={classes.body}>
      <Header />
      <Form />
      <Table />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
