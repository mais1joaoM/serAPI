import express, { request } from 'express';
import "./database";
import { routes } from "./routes";
import { createServer } from "http"

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log("Server is running on port 3333"))
