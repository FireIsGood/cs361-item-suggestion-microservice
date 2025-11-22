import { serve } from "@hono/node-server";
import { Hono } from "hono";
import fs from "node:fs";

const app = new Hono();

let items: string[] = [];

// Load items from fs
try {
  const data: string = fs.readFileSync("./items.txt", { encoding: "utf8" });
  items = data.replace(/\r?\n$/, "").split(/\r?\n/);
} catch (error) {
  console.error(error);
}

app.get("/item", (c) => {
  const item = items[Math.floor(Math.random() * items.length)];

  return c.text(item);
});

app.get("/all-items", (c) => {
  return c.json(items);
});

serve(
  {
    fetch: app.fetch,
    port: 6446,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
