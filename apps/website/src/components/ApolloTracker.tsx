import { useEffect } from "react";

const APOLLO_APP_ID = "69f08fb34c69250011068113";
const SCRIPT_ATTR = "data-apollo-tracker";

declare global {
  interface Window {
    trackingFunctions?: {
      onLoad: (opts: { appId: string }) => void;
    };
  }
}

const loadApollo = () => {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

  const nocache = Math.random().toString(36).substring(7);
  const script = document.createElement("script");
  script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`;
  script.async = true;
  script.defer = true;
  script.setAttribute(SCRIPT_ATTR, "true");
  script.onload = () => {
    window.trackingFunctions?.onLoad({ appId: APOLLO_APP_ID });
  };
  document.head.appendChild(script);
};

const hasMarketingConsent = (): boolean => {
  try {
    const raw = localStorage.getItem("cookie-consent");
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed?.preferences?.marketing);
  } catch {
    return false;
  }
};

const ApolloTracker = () => {
  useEffect(() => {
    if (hasMarketingConsent()) {
      loadApollo();
    }

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.marketing) {
        loadApollo();
      }
    };

    window.addEventListener("cookie-consent-changed", handler);
    return () => window.removeEventListener("cookie-consent-changed", handler);
  }, []);

  return null;
};

export default ApolloTracker;
