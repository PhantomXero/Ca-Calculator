import { Person } from "@mui/icons-material";
import "./App.css";
import Btn from "./components/Btn";
import App_Bar from "./constants/App_Bar";

function App() {
  return (
    <>
      <App_Bar />
      <h1>Hello Dalitso</h1>
      <Btn />
      <Person />
    </>
  );
}

export default App;
