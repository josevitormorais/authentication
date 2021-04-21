import express from "express";
import mongoose from "mongoose";
import { session, RedisStore, redisClient } from "./services";
import { SESSION_OPTIONS, APP_PORT, MONGO_OPTIONS, MONGO_URI } from "./config";

async function main() {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const app = express();
  app.use(express.json());

  app.use(
    session({
      ...SESSION_OPTIONS,
      store: new RedisStore({ client: redisClient }),
    })
  );

  app.get("/", (req, res) => {
    res.json({ ok: "ok" });
  });

  app.listen(APP_PORT, () => console.log(`O pai ta on... port ${APP_PORT}`));
}
main();
