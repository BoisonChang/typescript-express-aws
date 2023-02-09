import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// 設定使用 ejs 模板引擎
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.render("index", { message: "AWS EC2!" });
});

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
