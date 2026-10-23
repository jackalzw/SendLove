import { getStore } from "@netlify/blobs";
import { timingSafeEqual } from "node:crypto";

const json = (o, s = 200) =>
  new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  let b;
  try { b = await req.json(); } catch { return json({ error: "Bad request" }, 400); }
  const id = String(b.id || "");
  if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return json({ error: "Not found" }, 404);
  const store = getStore("puzzles");
  const d = await store.get(id, { type: "json" });
  if (!d) return json({ error: "Not found" }, 404);
  const a = Buffer.from(String(b.token || "")), t = Buffer.from(d.token);
  if (a.length !== t.length || !timingSafeEqual(a, t)) return json({ error: "Not allowed" }, 403);
  await store.delete(id);
  return json({ ok: true });
};

export const config = { path: "/api/delete", method: "POST" };
