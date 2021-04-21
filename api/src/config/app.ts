export const { NODE_ENV = "development", APP_PORT = 4000 } = process.env;

export const PROD = NODE_ENV === "production";
