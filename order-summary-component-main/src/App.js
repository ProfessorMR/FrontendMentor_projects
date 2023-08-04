import "./App.css";

import { PALE_BLUE } from "./helpers/Colors";
import Card from "./components/Card";

const App = () => {
  return (
    <main className="App" style={{ backgroundColor: PALE_BLUE }}>
      <Card />
    </main>
  );
};

export default App;
