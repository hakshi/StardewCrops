import cropsTest from "../assets/CropsTest";
import { BarChart, Bar } from "recharts";

const CropsChart = () => {
  return (
    <BarChart width={1000} height={500} data={cropsTest}>
      <Bar dataKey="baseSell" fill="#8884d8" />
    </BarChart>
  );
};

export default CropsChart;
