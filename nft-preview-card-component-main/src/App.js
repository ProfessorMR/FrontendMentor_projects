import Colors from "./helpers/Colors";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  return (
    <main
      className="App min-vh-100 w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: Colors.VERY_DARK_BLUE_MAIN }}
    >
      <Card />
    </main>
  );
};

export default App;
