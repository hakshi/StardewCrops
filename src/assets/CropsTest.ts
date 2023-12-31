// Test file with only one crop per season to help with debugging.
// Follows the same format as the larger file.

interface Crop {
    name: string;
    baseSell: number;
    url: string;
    img: string;
    season: string;
    initialGrow: number;
    regrow: number;
}


let cropsTest: Crop[] = [
    {
        name: "Blue_Jazz",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Blue_Jazz",
        img: "bluejazz.png",
        season: "spring",
        initialGrow: 7,
        regrow: 0
    },
    {
        name: "Blueberry",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Blueberry",
        img: "blueberry.png",
        season: "summer",
        initialGrow: 7,
        regrow: 4
    },
    {
        name: "Amaranth",
        baseSell: 150,
        url: "http://stardewvalleywiki.com/Amaranth",
        img: "amaranth.png",
        season: "fall",
        initialGrow: 7,
        regrow: 0
    }
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

// Exports the map as a 2D array of crops organized by season.
const crops2DArray = Object.values(cropsBySeason);


export default crops2DArray;