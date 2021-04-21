import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { REDIS_OPTIONS } from "../config";

const RedisStore = connectRedis(session);
const redisClient = new Redis(REDIS_OPTIONS);

export { RedisStore, redisClient, session };
