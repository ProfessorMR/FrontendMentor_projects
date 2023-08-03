import "./App.css";

import { PALE_BLUE } from "./helpers/Colors";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: PALE_BLUE }}>
      <Card />
    </div>
  );
};

export default App;
