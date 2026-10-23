import { getStore } from "@netlify/blobs";
import { randomBytes } from "node:crypto";

const OCCASIONS = ["birthday", "welcome-back", "sorry", "thank-you", "congratulations", "just-because"];
const LEVELS = ["easy", "medium", "hard"];
const MAX_PHOTOS = 8;
const MAX_PHOTO_CHARS = 400000;
const PHOTO_RE = /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/;

const json = (o, s = 200) =>
  new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default async (req) => {
  let b;
  try { b = await req.json(); } catch { return json({ error: "Bad request" }, 400); }

  const to = clean(b.to, 40);
  const message = clean(b.message, 1000);
  if (!to || !message) return json({ error: "Name and message are required." }, 400);
  if (!OCCASIONS.includes(b.occasion) || !LEVELS.includes(b.level)) return json({ error: "Bad occasion or difficulty." }, 400);

  const photos = Array.isArray(b.photos) ? b.photos : [];
  if (photos.length < 1 || photos.length > MAX_PHOTOS) return json({ error: "Add 1 to " + MAX_PHOTOS + " pictures." }, 400);
  for (const p of photos) {
    if (typeof p !== "string" || p.length > MAX_PHOTO_CHARS || !PHOTO_RE.test(p)) {
      return json({ error: "One of the pictures isn’t valid." }, 400);
    }
  }

  const id = randomBytes(8).toString("base64url");
  const token = randomBytes(16).toString("hex");
  await getStore("puzzles").setJSON(id, { to, message, occasion: b.occasion, level: b.level, photos, token, created: Date.now() });
  return json({ id, token });
};

export const config = { path: "/api/create", method: "POST" };
