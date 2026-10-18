import type { LegalBlock } from "./types";

// Short builders that keep the legal texts in the language files readable.
export const p = (text: string): LegalBlock => ({ type: "p", text });
export const list = (...items: string[]): LegalBlock => ({ type: "list", items });
export const table = (head: [string, string], ...rows: [string, string][]): LegalBlock => ({ type: "table", head, rows });
export const callout = (text: string): LegalBlock => ({ type: "callout", text });
