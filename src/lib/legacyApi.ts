import { readFileSync } from "fs";

const legacyToNewURLMap: Record<string, string> = JSON.parse(
  readFileSync("ref/legacyToNewURLMap.json").toString()
);

export function getAllLegacyURL(): string[] {
  return Object.keys(legacyToNewURLMap);
}

export function getNewURL(legacy: string): string | undefined {
  return `/${legacyToNewURLMap[legacy]}` ?? undefined;
}
