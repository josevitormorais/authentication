import { SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    [key: string]: any;
    cookie: Cookie;
  }
}
