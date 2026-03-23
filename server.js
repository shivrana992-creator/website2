import express from "express"
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index.html");
})

app.listen(port, () => {
    console.log("server started at 3000")
})