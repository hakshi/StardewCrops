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
        name: "Blue Jazz",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Blue_Jazz",
        img: "bluejazz.png",
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
        name: "Coffee Bean",
        baseSell: 15,
        url: "http://stardewvalleywiki.com/Coffee_Bean",
        img: "coffeebean.png",
        season: "spring" // THIS CROP CAN ALSO BE GROWN IN SUMMER, REMOVED FOR TESTING
    },
    {
        name: "Garlic",
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Garlic",
        img: "garlic.png",
        season: "spring"
    },
    {
        name: "Green Bean",
        baseSell: 40,
        url: "http://stardewvalleywiki.com/Green_Bean",
        img: "greenbean.png",
        season: "spring"
    },
    {
        name: "Kale",
        baseSell: 110,
        url: "http://stardewvalleywiki.com/Kale",
        img: "kale.png",
        season: "spring"
    },
    {
        name: "Parsnip",
        baseSell: 35,
        url: "http://stardewvalleywiki.com/Parsnip",
        img: "parsnip.png",
        season: "spring"
    },
    {
        name: "Potato",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Potato",
        img: "potato.png",
        season: "spring"
    },
    {
        name: "Rhubarb",
        baseSell: 220,
        url: "http://stardewvalleywiki.com/Rhubarb",
        img: "rhubarb.png",
        season: "spring"
    },
    {
        name: "Strawberry",
        baseSell: 120,
        url: "http://stardewvalleywiki.com/Strawberry",
        img: "strawberry.png",
        season: "spring"
    },
    {
        name: "Tulip",
        baseSell: 30,
        url: "http://stardewvalleywiki.com/Tulip",
        img: "tulip.png",
        season: "spring"
    },
    {
        name: "Unmilled Rice",
        baseSell: 30,
        url: "http://stardewvalleywiki.com/Unmilled_Rice",
        img: "unmilledrice.png",
        season: "spring"
    },
    {
        name: "Blueberry",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Blueberry",
        img: "blueberry.png",
        season: "summer"
    },
    {
        name: "Corn",
        baseSell: 50,
        url: "http://stardewvalleywiki.com/Corn",
        img: "corn.png",
        season: "summer" // THIS CROP CAN ALSO BE GROWN IN FALL, REMOVED FOR TESTING
    },
    {
        name: "Hops",
        baseSell: 25,
        url: "http://stardewvalleywiki.com/Hops",
        img: "hops.png",
        season: "summer"
    },
    {
        name: "Hot Pepper",
        baseSell: 40,
        url: "http://stardewvalleywiki.com/Hot_Pepper",
        img: "hotpepper.png",
        season: "summer"
    },
    {
        name: "Melon",
        baseSell: 250,
        url: "http://stardewvalleywiki.com/Melon",
        img: "melon.png",
        season: "summer"
    },
    {
        name: "Poppy",
        baseSell: 140,
        url: "http://stardewvalleywiki.com/Poppy",
        img: "poppy.png",
        season: "summer"
    },
    {
        name: "Radish",
        baseSell: 90,
        url: "http://stardewvalleywiki.com/Radish",
        img: "radish.png",
        season: "summer"
    },
    {
        name: "Red Cabbage",
        baseSell: 260,
        url: "http://stardewvalleywiki.com/Red_Cabbage",
        img: "redcabbage.png",
        season: "summer"
    },
    {
        name: "Starfruit",
        baseSell: 750,
        url: "http://stardewvalleywiki.com/Starfruit",
        img: "starfruit.png",
        season: "summer"
    },
    {
        name: "Summer Spangle",
        baseSell: 90,
        url: "http://stardewvalleywiki.com/Summer_Spangle",
        img: "summerspangle.png",
        season: "summer"
    },
    {
        name: "Sunflower",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Sunflower",
        img: "sunflower.png",
        season: "summer"
    },
    {
        name: "Tomato",
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Tomato",
        img: "tomato.png",
        season: "summer"
    },
    {
        name: "Wheat",
        baseSell: 25,
        url: "http://stardewvalleywiki.com/Wheat",
        img: "wheat.png",
        season: "summer" // THIS CROP CAN ALSO BE GROWN IN FALL, REMOVED FOR TESTING
    },
    {
        name: "Amaranth",
        baseSell: 150,
        url: "http://stardewvalleywiki.com/Amaranth",
        img: "amaranth.png",
        season: "fall"
    },
    {
        name: "Artichoke",
        baseSell: 160,
        url: "http://stardewvalleywiki.com/Artichoke",
        img: "artichoke.png",
        season: "fall"
    },
    {
        name: "Beet",
        baseSell: 100,
        url: "http://stardewvalleywiki.com/Beet",
        img: "beet.png",
        season: "fall"
    },
    {
        name: "Bok Choy",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Bok_Choy",
        img: "bokchoy.png",
        season: "fall"
    },
    {
        name: "Cranberries",
        baseSell: 75,
        url: "http://stardewvalleywiki.com/Cranberries",
        img: "cranberries.png",
        season: "fall"
    },
    {
        name: "Eggplant",
        baseSell: 60,
        url: "http://stardewvalleywiki.com/Eggplant",
        img: "eggplant.png",
        season: "fall"
    },
    {
        name: "Fairy Rose",
        baseSell: 290,
        url: "http://stardewvalleywiki.com/Fairy_Rose",
        img: "fairyrose.png",
        season: "fall"
    },
    {
        name: "Grape",
        baseSell: 80,
        url: "http://stardewvalleywiki.com/Grape",
        img: "grape.png",
        season: "fall"
    },
    {
        name: "Pumpkin",
        baseSell: 320,
        url: "http://stardewvalleywiki.com/Pumpkin",
        img: "pumpkin.png",
        season: "fall"
    },
    {
        name: "Yam",
        baseSell: 160,
        url: "http://stardewvalleywiki.com/Yam",
        img: "yam.png",
        season: "fall"
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