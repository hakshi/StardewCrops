import { useEffect } from "react";
import Calculator from "./components/Calculator";
import Heading from "./components/Heading";
import { preloadImages } from "./imagePreloader";
import imagePaths from "./imagePaths";

function App() {
  useEffect(() => {
    preloadImages(imagePaths);
  });

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
