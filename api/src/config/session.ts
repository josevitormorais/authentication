import { SessionOptions } from "express-session";
import { PROD } from "./app";

const {
  SESSION_SECRET = "secret_session",
  SESSION_IDLE_TIMEOUT = 1000 * 60 * 30,
  SESSION_NAME = "sid",
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: Number(SESSION_IDLE_TIMEOUT),
    secure: PROD,
    sameSite: true,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false,
};
