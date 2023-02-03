import "./App.css";
import Header from "./components/Header";
import Table from "./components/table/Table";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Form from "./components/Form";

function App() {
  // const [count, setCount] = useState(0)

  const classes = {
    body: "h-screen bg-gray-900 text-white",
  };

  return (
    <div className={classes.body}>
      <Provider store={store}>
        <Header />
        <Form />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
