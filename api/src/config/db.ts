import { ConnectOptions } from "mongoose";

export const {
  MONGO_USERNAME = "admin",
  MONGO_PASSWORD = "admin",
  MONGO_HOST = "localhost",
  MONGO_PORT = 27017,
  MONGO_DATABASE = "auth",
} = process.env;

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(
  MONGO_PASSWORD
)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const MONGO_OPTIONS: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
