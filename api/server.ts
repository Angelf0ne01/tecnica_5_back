import express from "express";
import router from "./Routes";
import config from "../config";
import cors from "cors";
import { dbConnect } from "../store/mysql";
const app = express();

dbConnect();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.API.PORT;

router(app);

app.listen(PORT, () => {
  console.log(`App run in http://localhost:${PORT}`);
});
