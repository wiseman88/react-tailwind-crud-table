import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

function App() {
  const classes = {
    body: "h-screen bg-gray-900 text-white",
  };

  const showModal = useSelector((state) => state.modal.showModal);

  return (
    <BrowserRouter>
      <div className={classes.body}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {showModal && <Modal />}
      </div>
    </BrowserRouter>
  );
}

export default App;
