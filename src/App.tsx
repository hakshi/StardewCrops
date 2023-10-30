import { useEffect } from "react";
import Calculator from "./components/Calculator";
import Heading from "./components/Heading";
import { preloadImages } from "./imagePreloader";
import imagePaths from "./imagePaths";
import backgroundImage from "./assets/img/bg_night.png";

function App() {
  useEffect(() => {
    preloadImages(imagePaths);
  }, []);

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
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
};
