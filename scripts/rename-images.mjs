/**
 * rename-images.mjs
 * Copies all WhatsApp gallery images to clean descriptive names,
 * then rewrites every image path in source code.
 *
 * Run: node scripts/rename-images.mjs
 */

import fs from "fs";
import path from "path";

const BASE = "public/images/gallery";
const A = `${BASE}/WhatsApp Unknown 2026-03-24 at 10.10.50 AM`;
const B = `${BASE}/WhatsApp Unknown 2026-03-24 at 10.10.54 AM`;
const C = `${BASE}/WhatsApp Unknown 2026-03-24 at 10.10.58 AM`;

// [oldRelativePath, newFilename]  — new files land flat in BASE
const MAPPING = [
  // ── ROOT FOLDER ──────────────────────────────────────────────────────
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.58.57 PM.jpeg`,         "driveway-after-01.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.59.06 PM (1).jpeg`,     "driveway-after-02.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.59.06 PM.jpeg`,         "driveway-after-03.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.59.30 PM (1).jpeg`,     "patio-after-01.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.59.30 PM.jpeg`,         "patio-before-01.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 5.59.48 PM.jpeg`,         "patio-after-02.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.01.58 PM.jpeg`,         "patio-before-02.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.01.59 PM (1).jpeg`,     "driveway-after-04.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.01.59 PM.jpeg`,         "patio-before-03.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg`,         "patio-after-03.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg`,     "patio-after-04.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg`,         "patio-after-05.jpeg"],
  [`${BASE}/WhatsApp Image 2026-03-23 at 6.10.02 PM.jpeg`,         "stamped-after-01.jpeg"],

  // ── SUBFOLDER A (10.10.50) ───────────────────────────────────────────
  [`${A}/WhatsApp Image 2026-03-23 at 8.05.52 PM.jpeg`,            "commercial-after-01.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.06.17 PM.jpeg`,            "commercial-after-02.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.06.49 PM.jpeg`,            "commercial-after-03.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.07.45 PM (1).jpeg`,        "stamped-after-02.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.07.45 PM.jpeg`,            "stamped-after-03.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.08.27 PM.jpeg`,            "stamped-after-04.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.07 PM.jpeg`,            "driveway-after-05.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.08 PM (1).jpeg`,        "driveway-after-06.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.08 PM (2).jpeg`,        "patio-after-06.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.08 PM (3).jpeg`,        "patio-after-07.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.08 PM (4).jpeg`,        "patio-after-08.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.08 PM.jpeg`,            "patio-after-09.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (1).jpeg`,        "patio-after-10.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (10).jpeg`,       "patio-after-11.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (11).jpeg`,       "patio-after-12.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (12).jpeg`,       "patio-after-13.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (13).jpeg`,       "patio-after-14.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (2).jpeg`,        "patio-after-15.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (3).jpeg`,        "patio-after-16.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (4).jpeg`,        "patio-after-17.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (5).jpeg`,        "patio-after-18.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (6).jpeg`,        "patio-after-19.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (7).jpeg`,        "patio-after-20.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (8).jpeg`,        "patio-after-21.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM (9).jpeg`,        "patio-after-22.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.09 PM.jpeg`,            "patio-after-23.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.14.28 PM.jpeg`,            "patio-after-24.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.15.04 PM (1).jpeg`,        "patio-after-25.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.15.04 PM.jpeg`,            "patio-after-26.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.16.43 PM (1).jpeg`,        "patio-after-27.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.16.43 PM (2).jpeg`,        "patio-after-28.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.16.43 PM (3).jpeg`,        "patio-after-29.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.16.43 PM (4).jpeg`,        "patio-after-30.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.16.43 PM.jpeg`,            "patio-after-31.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (1).jpeg`,        "patio-after-32.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (2).jpeg`,        "patio-after-33.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (3).jpeg`,        "patio-after-34.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (4).jpeg`,        "patio-after-35.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (5).jpeg`,        "patio-after-36.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM (6).jpeg`,        "patio-after-37.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.17.48 PM.jpeg`,            "patio-after-38.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.18.20 PM.jpeg`,            "patio-after-39.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.18.21 PM (1).jpeg`,        "stamped-after-05.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.18.21 PM (2).jpeg`,        "stamped-after-06.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.18.21 PM.jpeg`,            "stamped-after-07.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.19.32 PM.jpeg`,            "patio-after-40.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.22.13 PM (1).jpeg`,        "commercial-after-04.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.22.13 PM (2).jpeg`,        "commercial-after-05.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.22.13 PM.jpeg`,            "commercial-after-06.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.22.14 PM.jpeg`,            "commercial-after-07.jpeg"],
  [`${A}/WhatsApp Image 2026-03-23 at 8.25.40 PM.jpeg`,            "commercial-after-08.jpeg"],

  // ── SUBFOLDER B (10.10.54) ───────────────────────────────────────────
  [`${B}/WhatsApp Image 2026-03-23 at 8.02.44 PM (1).jpeg`,        "driveway-after-07.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.02.44 PM (2).jpeg`,        "patio-after-41.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.02.44 PM (3).jpeg`,        "stamped-after-08.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.02.44 PM (4).jpeg`,        "driveway-after-08.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.02.44 PM.jpeg`,            "stamped-after-09.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.40 PM (1).jpeg`,        "patio-after-42.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.40 PM (2).jpeg`,        "patio-after-43.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.40 PM (3).jpeg`,        "patio-after-44.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.40 PM (4).jpeg`,        "patio-after-45.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.40 PM.jpeg`,            "patio-after-46.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.03.56 PM.jpeg`,            "patio-before-04.jpeg"],
  [`${B}/WhatsApp Image 2026-03-23 at 8.04.13 PM.jpeg`,            "patio-after-47.jpeg"],

  // ── SUBFOLDER C (10.10.58) ───────────────────────────────────────────
  [`${C}/WhatsApp Image 2026-03-23 at 6.01.17 PM.jpeg`,            "patio-before-05.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.01.58 PM.jpeg`,            "patio-before-06.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.01.59 PM (1).jpeg`,        "driveway-after-09.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.01.59 PM.jpeg`,            "patio-before-07.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.09.25 PM.jpeg`,            "patio-after-48.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.09.26 PM (1).jpeg`,        "patio-after-49.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.09.26 PM.jpeg`,            "patio-after-50.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.10.01 PM.jpeg`,            "stamped-after-10.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.10.02 PM (1).jpeg`,        "stamped-after-11.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.10.02 PM (2).jpeg`,        "stamped-after-12.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.10.02 PM.jpeg`,            "stamped-after-13.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.11.09 PM (1).jpeg`,        "driveway-after-10.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.11.09 PM.jpeg`,            "driveway-after-11.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.12.19 PM (1).jpeg`,        "driveway-before-01.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.12.19 PM.jpeg`,            "driveway-before-02.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.12.57 PM (1).jpeg`,        "driveway-after-12.jpeg"],
  [`${C}/WhatsApp Image 2026-03-23 at 6.12.57 PM.jpeg`,            "driveway-after-13.jpeg"],
];

// ── 1. COPY FILES ─────────────────────────────────────────────────────────────
let copied = 0, skipped = 0;
for (const [oldPath, newName] of MAPPING) {
  const dest = `${BASE}/${newName}`;
  if (!fs.existsSync(oldPath)) {
    console.warn(`⚠  NOT FOUND: ${oldPath}`);
    skipped++;
    continue;
  }
  fs.copyFileSync(oldPath, dest);
  copied++;
}
console.log(`\n✓ Copied ${copied} files, skipped ${skipped}\n`);

// ── 2. BUILD OLD→NEW URL MAP ──────────────────────────────────────────────────
const urlMap = new Map();
for (const [oldPath, newName] of MAPPING) {
  // Convert local filesystem path to /images/... URL (strip leading "public")
  const oldUrl = "/" + oldPath.replace(/\\/g, "/").replace(/^public\//, "");
  const newUrl = `/images/gallery/${newName}`;
  urlMap.set(oldUrl, newUrl);
}

// ── 3. REWRITE SOURCE FILES ───────────────────────────────────────────────────
const SRC_FILES = [
  "src/app/page.tsx",
  "src/app/services/[slug]/page.tsx",
  "src/components/Footer.tsx",
  "src/components/GalleryGrid.tsx",
  "src/components/Portfolio.tsx",
  "src/components/Services.tsx",
];

for (const file of SRC_FILES) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, "utf8");
  let changed = 0;
  for (const [oldUrl, newUrl] of urlMap) {
    if (content.includes(oldUrl)) {
      content = content.split(oldUrl).join(newUrl);
      changed++;
    }
  }
  if (changed > 0) {
    fs.writeFileSync(file, content, "utf8");
    console.log(`  ✎ Updated ${file} (${changed} replacements)`);
  }
}

console.log("\n✅ Done! Old WhatsApp folders still exist — delete them manually once confirmed.\n");
