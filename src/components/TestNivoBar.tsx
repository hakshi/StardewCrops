import { ResponsiveBar } from "@nivo/bar";
import cropsTest from "../assets/CropsTest";

const data = [
  {
    country: "AD",
    "hot dog": 19,
    "hot dogColor": "hsl(189, 70%, 50%)",
    burger: 182,
    burgerColor: "hsl(237, 70%, 50%)",
    sandwich: 68,
    sandwichColor: "hsl(74, 70%, 50%)",
    kebab: 116,
    kebabColor: "hsl(1, 70%, 50%)",
    fries: 117,
    friesColor: "hsl(267, 70%, 50%)",
    donut: 1,
    donutColor: "hsl(82, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 54,
    "hot dogColor": "hsl(102, 70%, 50%)",
    burger: 170,
    burgerColor: "hsl(294, 70%, 50%)",
    sandwich: 151,
    sandwichColor: "hsl(282, 70%, 50%)",
    kebab: 97,
    kebabColor: "hsl(178, 70%, 50%)",
    fries: 118,
    friesColor: "hsl(342, 70%, 50%)",
    donut: 11,
    donutColor: "hsl(180, 70%, 50%)",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = () => (
  <div style={{ height: 500 }}>
    <ResponsiveBar
      data={cropsTest}
      keys={["baseSell"]}
      indexBy="name"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      onClick={() => console.log(cropsTest)}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Crop Name",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sell Price", // TEMPORARY NAME, THIS SHOULD BE GOLD / DAY
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  </div>
);

export default MyResponsiveBar;
