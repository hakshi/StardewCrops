import crops2DArray from "../assets/CropsTest";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface Props {
  selectedSeason: number;
}

function CropsChart({ selectedSeason }: Props) {
  const dataForCurrentSeason = crops2DArray[selectedSeason];

  return (
    <BarChart width={1000} height={500} data={dataForCurrentSeason}>
      <Bar dataKey="baseSell" fill="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
}

export default CropsChart;
