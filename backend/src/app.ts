import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./router";


async function main() {
    dotenv.config()

    const port = 3000;
    const app = express();

    app.use(cors({
        origin: "*",
    }));
    app.use(express.json());
    app.use(router);

    await mongoose.connect(process.env.DATABASE_URL ?? "");

    app.listen(port, () => {
        console.log("server running port: " + port);
    })
}

main();