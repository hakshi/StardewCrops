// Test file with smaller sample size for debugging purposes.
// Follows the same format as the larger file.

interface Crop {
    name: string;
    baseSell: number;
    url: string;
    img: string;
    season: string;
}


let cropsTest: Crop[] = [
    {
        name: "Parsnip",
        baseSell: 35,
        url: "http://stardewvalleywiki.com/Parsnip",
        img: "parsnip.png",
        season: "spring"
    },
    {
        name: "Cauliflower",
        baseSell: 175,
        url: "http://stardewvalleywiki.com/Cauliflower",
        img: "cauliflower.png",
        season: "spring"
    },
    {
        name: "Amaranth",
        baseSell: 150,
        url: "http://stardewvalleywiki.com/Amaranth",
        img: "amaranth.png",
        season: "summer"
    },
];

interface SeasonMap {
    [season: string]: Crop[];
}

// Generate a map of crops by season
const cropsBySeason = cropsTest.reduce<SeasonMap>((acc, crop) => {
    if (!acc[crop.season]) {
        acc[crop.season] = [];
    }
    acc[crop.season].push(crop);
    return acc;
}, {});

const crops2DArray = Object.values(cropsBySeason);


export default crops2DArray;