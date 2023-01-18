import "./App.css";
import Header from "./components/Header";
import Table from "./components/table/Table";

function App() {
  // const [count, setCount] = useState(0)

  const classes = {
    body: "h-screen bg-gray-900 text-white",
  };

  return (
    <div className={classes.body}>
      <Header />
      <Table />
    </div>
  );
}

export default App;
