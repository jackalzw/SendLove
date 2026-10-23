import { getStore } from "@netlify/blobs";

const json = (o, s = 200) =>
  new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  const id = new URL(req.url).searchParams.get("id") || "";
  if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return json({ error: "Not found" }, 404);
  const d = await getStore("puzzles").get(id, { type: "json" });
  if (!d) return json({ error: "Not found" }, 404);
  const { token, ...pub } = d;
  return json(pub);
};

export const config = { path: "/api/get", method: "GET" };
