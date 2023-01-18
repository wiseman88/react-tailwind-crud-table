import "./App.css";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)

  const classes = {
    body: "h-screen bg-gray-900 text-white",
  };

  return (
    <div className={classes.body}>
      <Header />
    </div>
  );
}

export default App;
