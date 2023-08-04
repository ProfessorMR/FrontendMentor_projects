import Card from "./components/Card";
import Colors from "./helpers/Colors";

const App = () => {
  return (
    <main
      className="min-vh-100 d-flex align-align-items-center justify-content-center"
      style={{ backgroundColor: Colors.VERY_LIGHT_GRAY }}
    >
      <Card />
    </main>
  );
};

export default App;
