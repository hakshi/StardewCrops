import cropsTest from "../assets/CropsTest";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function CropsChart() {
  return (
    <BarChart width={1000} height={500} data={cropsTest}>
      <Bar dataKey="baseSell" fill="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
}

export default CropsChart;
