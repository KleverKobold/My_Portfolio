import { useState, useEffect } from "react";

export default function usePreloadImages(imageUrls) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    if (!imageUrls.length) {
      setLoaded(true);
      return;
    }

    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === imageUrls.length && isMounted) {
          setLoaded(true);
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return loaded;
}
