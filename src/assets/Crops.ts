// Test file with smaller sample size for debugging purposes.
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


let crops: Crop[] = [
    {
        name: "Blue Jazz",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Blue_Jazz",
        img: "bluejazz.png",
        season: "spring",
        initialGrow: 7,
        regrow: 0
    },
    {
        name: "Cauliflower",
        baseSell: 175,
        url: "http://stardewvalleywiki.com/Cauliflower",
        img: "cauliflower.png",
        season: "spring",
        initialGrow: 12,
        regrow: 0
    },
    {
        name: "Coffee Bean",
        baseSell: 15,
        url: "http://stardewvalleywiki.com/Coffee_Bean",
        img: "coffeebean.png",
        season: "spring", // THIS CROP CAN ALSO BE GROWN IN SUMMER, REMOVED FOR TESTING
        initialGrow: 10,
        regrow: 2
    },
    {
        name: "Garlic",
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Garlic",
        img: "garlic.png",
        season: "spring",
        initialGrow: 4,
        regrow: 0
    },
    {
        name: "Green Bean",
        baseSell: 40,
        url: "http://stardewvalleywiki.com/Green_Bean",
        img: "greenbean.png",
        season: "spring",
        initialGrow: 10,
        regrow: 3
    },
    {
        name: "Kale",
        baseSell: 110,
        url: "http://stardewvalleywiki.com/Kale",
        img: "kale.png",
        season: "spring",
        initialGrow: 6,
        regrow: 0
    },
    {
        name: "Parsnip",
        baseSell: 35,
        url: "http://stardewvalleywiki.com/Parsnip",
        img: "parsnip.png",
        season: "spring",
        initialGrow: 4,
        regrow: 0
    },
    {
        name: "Potato", // HAS A CHANCE TO GIVE EXTRA BASED ON LUCK
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Potato",
        img: "potato.png",
        season: "spring",
        initialGrow: 6,
        regrow: 0
    },
    {
        name: "Rhubarb",
        baseSell: 220,
        url: "http://stardewvalleywiki.com/Rhubarb",
        img: "rhubarb.png",
        season: "spring",
        initialGrow: 13,
        regrow: 0
    },
    {
        name: "Strawberry",
        baseSell: 120,
        url: "http://stardewvalleywiki.com/Strawberry",
        img: "strawberry.png",
        season: "spring",
        initialGrow: 8,
        regrow: 4
    },
    {
        name: "Tulip",
        baseSell: 30,
        url: "http://stardewvalleywiki.com/Tulip",
        img: "tulip.png",
        season: "spring",
        initialGrow: 6,
        regrow: 0
    },
    {
        name: "Unmilled Rice",
        baseSell: 30,
        url: "http://stardewvalleywiki.com/Unmilled_Rice",
        img: "unmilledrice.webp",
        season: "spring",
        initialGrow: 6,
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
        name: "Corn",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Corn",
        img: "corn.png",
        season: "summer", // THIS CROP CAN ALSO BE GROWN IN FALL, REMOVED FOR TESTING
        initialGrow: 14,
        regrow: 4
    },
    {
        name: "Hops",
        baseSell: 25,
        url: "http://stardewvalleywiki.com/Hops",
        img: "hops.png",
        season: "summer",
        initialGrow: 11,
        regrow: 1
    },
    {
        name: "Hot Pepper",
        baseSell: 40,
        url: "http://stardewvalleywiki.com/Hot_Pepper",
        img: "hotpepper.png",
        season: "summer",
        initialGrow: 5,
        regrow: 3
    },
    {
        name: "Melon",
        baseSell: 250,
        url: "http://stardewvalleywiki.com/Melon",
        img: "melon.png",
        season: "summer",
        initialGrow: 12,
        regrow: 0
    },
    {
        name: "Poppy",
        baseSell: 140,
        url: "http://stardewvalleywiki.com/Poppy",
        img: "poppy.png",
        season: "summer",
        initialGrow: 7,
        regrow: 0
    },
    {
        name: "Radish",
        baseSell: 90,
        url: "http://stardewvalleywiki.com/Radish",
        img: "radish.png",
        season: "summer",
        initialGrow: 6,
        regrow: 0
    },
    {
        name: "Red Cabbage",
        baseSell: 260,
        url: "http://stardewvalleywiki.com/Red_Cabbage",
        img: "redcabbage.png",
        season: "summer",
        initialGrow: 9,
        regrow: 0
    },
    {
        name: "Starfruit",
        baseSell: 750,
        url: "http://stardewvalleywiki.com/Starfruit",
        img: "starfruit.png",
        season: "summer",
        initialGrow: 13,
        regrow: 0
    },
    {
        name: "Summer Spangle",
        baseSell: 90,
        url: "http://stardewvalleywiki.com/Summer_Spangle",
        img: "summerspangle.png",
        season: "summer",
        initialGrow: 8,
        regrow: 0
    },
    {
        name: "Sunflower",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Sunflower",
        img: "sunflower.png",
        season: "summer",
        initialGrow: 8,
        regrow: 0
    },
    {
        name: "Tomato",
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Tomato",
        img: "tomato.png",
        season: "summer",
        initialGrow: 11,
        regrow: 4
    },
    {
        name: "Wheat",
        baseSell: 25,
        url: "http://stardewvalleywiki.com/Wheat",
        img: "wheat.png",
        season: "summer", // THIS CROP CAN ALSO BE GROWN IN FALL, REMOVED FOR TESTING
        initialGrow: 4,
        regrow: 0
    },
    {
        name: "Amaranth",
        baseSell: 150,
        url: "http://stardewvalleywiki.com/Amaranth",
        img: "amaranth.png",
        season: "fall",
        initialGrow: 7,
        regrow: 0
    },
    {
        name: "Artichoke",
        baseSell: 160,
        url: "http://stardewvalleywiki.com/Artichoke",
        img: "artichoke.png",
        season: "fall",
        initialGrow: 8,
        regrow: 0
    },
    {
        name: "Beet",
        baseSell: 100,
        url: "http://stardewvalleywiki.com/Beet",
        img: "beet.png",
        season: "fall",
        initialGrow: 6,
        regrow: 0
    },
    {
        name: "Bok Choy",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Bok_Choy",
        img: "bokchoy.png",
        season: "fall",
        initialGrow: 4,
        regrow: 0
    },
    {
        name: "Cranberries", // 2 cranberries per harvest
        baseSell: 75,
        url: "http://stardewvalleywiki.com/Cranberries",
        img: "cranberries.png",
        season: "fall",
        initialGrow: 7,
        regrow: 5
    },
    {
        name: "Eggplant", // .2% chance for more eggplants
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Eggplant",
        img: "eggplant.png",
        season: "fall",
        initialGrow: 5,
        regrow: 5
    },
    {
        name: "Fairy Rose",
        baseSell: 290,
        url: "http://stardewvalleywiki.com/Fairy_Rose",
        img: "fairyrose.png",
        season: "fall",
        initialGrow: 12,
        regrow: 0
    },
    {
        name: "Grape",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Grape",
        img: "grape.png",
        season: "fall",
        initialGrow: 10,
        regrow: 3
    },
    {
        name: "Pumpkin",
        baseSell: 320,
        url: "http://stardewvalleywiki.com/Pumpkin",
        img: "pumpkin.png",
        season: "fall",
        initialGrow: 13,
        regrow: 0
    },
    {
        name: "Yam",
        baseSell: 160,
        url: "http://stardewvalleywiki.com/Yam",
        img: "yam.png",
        season: "fall",
        initialGrow: 10,
        regrow: 0
    }
];

interface SeasonMap {
    [season: string]: Crop[];
}

// Generate a map of crops by season
const cropsBySeason = crops.reduce<SeasonMap>((acc, crop) => {
    if (!acc[crop.season]) {
        acc[crop.season] = [];
    }
    acc[crop.season].push(crop);
    return acc;
}, {});

// Exports the map as a 2D array of crops organized by season.
const crops2DArray = Object.values(cropsBySeason);


export default crops2DArray;