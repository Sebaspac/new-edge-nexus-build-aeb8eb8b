export const isLovablePreviewHost = () => {
  if (typeof window === "undefined") return false;

  return (
    window.location.hostname.endsWith(".lovableproject.com") ||
    window.location.hostname.startsWith("id-preview--")
  );
};

export const isEmbeddedIframe = () => {
  if (typeof window === "undefined") return false;

  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

export const shouldDisableHeavyPreviewEffects = () =>
  isLovablePreviewHost() || isEmbeddedIframe();