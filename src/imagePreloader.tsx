// imagePreloader.js

function preloadImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
}

export async function preloadImages(imageUrls: any) {
  try {
    const promises = imageUrls.map((url: string) => preloadImage(url));
    await Promise.all(promises);
    console.log("All images preloaded");
  } catch (error) {
    console.error("Error preloading images:", error);
  }
}
