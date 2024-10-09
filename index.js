import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("*", function (req, res) {
  res.status(404).render('404.ejs');
});
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
