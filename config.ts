import { config } from "dotenv";
config();

export default {
  API: {
    PORT: process.env.API_PORT,
  },
  DB: {
    MYSQL: {
      HOST: process.env.DB_HOST,
      PORT: parseInt(process.env.DB_PORT) || 3306,
      USER: process.env.DB_USER,
      PASSWORD: process.env.DB_PASSWORD,
      DATABASE: process.env.DB_DATABASE,
    },
  },
};
