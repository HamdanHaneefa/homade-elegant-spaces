import { useState, useEffect } from 'react';

export const useAssetLoader = (assets: string[]) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = assets.length;

    if (totalAssets === 0) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalAssets) * 100);
      setProgress(newProgress);
      
      if (loadedCount === totalAssets) {
        setLoaded(true);
      }
    };

    const loadAsset = (src: string) => {
      return new Promise<void>((resolve) => {
        if (src.includes('.mp4') || src.includes('.webm') || src.includes('.mov')) {
          // Handle video
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.muted = true;
          
          const onLoad = () => {
            cleanup();
            resolve();
          };
          
          const onError = () => {
            cleanup();
            resolve(); // Don't fail, just continue
          };
          
          const cleanup = () => {
            video.removeEventListener('loadedmetadata', onLoad);
            video.removeEventListener('error', onError);
          };
          
          video.addEventListener('loadedmetadata', onLoad);
          video.addEventListener('error', onError);
          video.src = src;
        } else {
          // Handle image
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't fail, just continue
          img.src = src;
        }
      });
    };

    const loadAllAssets = async () => {
      try {
        const promises = assets.map(async (asset) => {
          await loadAsset(asset);
          updateProgress();
        });
        
        await Promise.all(promises);
      } catch (err) {
        setError('Failed to load some assets');
        console.warn('Asset loading error:', err);
      }
    };

    loadAllAssets();
  }, [assets]);

  return { loaded, progress, error };
};
