import Calculator from "./components/Calculator";
import Heading from "./components/Heading";

function App() {
  return (
    <div style={styles.container}>
      <Heading />
      <Calculator />
    </div>
  );
}

export default App;

const styles = {
  container: {
    flex: 1,
  },
};
