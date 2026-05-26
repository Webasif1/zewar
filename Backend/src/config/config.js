import dotenv from "dotenv";
dotenv.config();


if(!process.env.PORT){
  console.error("Error: PORT is not defined in environment variables.");
}

if(!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in environment variables.");
}

if(!process.env.JWT_ACCESS_SECRET) {
  console.error("Error: JWT_ACCESS_SECRET is not defined in environment variables.");
}

if(!process.env.JWT_REFRESH_SECRET) {
  console.error("Error: JWT_REFRESH_SECRET is not defined in environment variables.");
}

if(!process.env.NODE_ENV) {
  console.error("Error: NODE_ENV is not defined in environment variables.");
}

if(!process.env.FRONTEND_URL) {
  console.error("Error: FRONTEND_URL is not defined in environment variables.");
}

export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
}
