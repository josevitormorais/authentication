import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ ok: "ok" });
});

app.listen(4000, () => console.log(`O pai ta on... port ${4000}`));
