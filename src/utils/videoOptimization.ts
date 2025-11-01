// Video optimization utilities
export const preloadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    
    const onLoadedData = () => {
      cleanup();
      resolve();
    };
    
    const onError = () => {
      cleanup();
      reject(new Error(`Failed to load video: ${src}`));
    };
    
    const cleanup = () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('error', onError);
    };
    
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('error', onError);
    video.src = src;
  });
};

export const optimizeVideo = (videoElement: HTMLVideoElement) => {
  // Set optimal loading attributes
  videoElement.preload = 'metadata';
  videoElement.muted = true;
  videoElement.playsInline = true;
  
  // Add loading optimization
  videoElement.style.willChange = 'transform';
  
  // Reduce quality on slow connections
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === 'slow-2g') {
      videoElement.style.filter = 'brightness(0.4) contrast(0.8)';
    }
  }
  
  return videoElement;
};

export const createVideoFallback = (fallbackImageSrc: string) => {
  const fallbackDiv = document.createElement('div');
  fallbackDiv.style.cssText = `
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${fallbackImageSrc}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.5) contrast(1.0);
  `;
  return fallbackDiv;
};
