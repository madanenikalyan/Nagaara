"use client";

import { useSyncExternalStore } from "react";

export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  landing_page: string;
  captured_at: string;
}

const EMPTY_UTM: UTMParams = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  landing_page: "",
  captured_at: "",
};

function parseUTMFromURL(): UTMParams {
  if (typeof window === "undefined") return EMPTY_UTM;

  const params = new URLSearchParams(window.location.search);
  const hasUTM =
    params.has("utm_source") ||
    params.has("utm_medium") ||
    params.has("utm_campaign");

  if (hasUTM) {
    const utmData: UTMParams = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      landing_page: window.location.href,
      captured_at: new Date().toISOString(),
    };

    localStorage.setItem("nagaara_utm", JSON.stringify(utmData));
    return utmData;
  }

  const stored = localStorage.getItem("nagaara_utm");
  return stored ? JSON.parse(stored) : EMPTY_UTM;
}

let cachedUTM: UTMParams | null = null;

function subscribe(callback: () => void): () => void {
  const handler = () => {
    cachedUTM = null;
    callback();
  };
  window.addEventListener("popstate", handler);
  return () => window.removeEventListener("popstate", handler);
}

function getSnapshot(): UTMParams {
  if (cachedUTM) return cachedUTM;
  cachedUTM = parseUTMFromURL();
  return cachedUTM;
}

function getServerSnapshot(): UTMParams {
  return EMPTY_UTM;
}

export function useUTMTracking(): UTMParams {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function getStoredUTM(): UTMParams {
  if (typeof window === "undefined") return EMPTY_UTM;
  const stored = localStorage.getItem("nagaara_utm");
  return stored ? JSON.parse(stored) : EMPTY_UTM;
}
