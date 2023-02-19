import "./App.css";
import Header from "./components/Header";
import styles from "./styles/styles.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Header />
        <main className="py-10">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
