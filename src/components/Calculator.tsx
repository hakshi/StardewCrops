import CropButton from "./CropButton";
//import crops from "../assets/Crops";
import crops from "../assets/CropsTest";
import SeasonPicker from "./SeasonPicker";

let cropsList = crops;

const Calculator = () => {
  return (
    <>
      <h2>Calculator</h2>
      <SeasonPicker />
      {cropsList.map((item) => (
        <CropButton key={item.name} url={item.url}>
          {item.name}
        </CropButton>
      ))}
    </>
  );
};

export default Calculator;
