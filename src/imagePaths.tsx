// imagePaths.js

import crops2DArray from "./assets/Crops";

const imagePaths: string[] = crops2DArray.flat().map((crop) => {
  return `../src/assets/img/${crop.img}`;
});

export default imagePaths;
