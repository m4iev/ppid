import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/regulasi", (req, res) => {
  res.send("belum ada isi");
});

app.get("/laporan", (req, res) => {
  res.send("belum ada isi");
});

app.get("/kontak", (req, res) => {
  res.send("belum ada isi");
});

app.get("*", function (req, res) {
  res.status(404).render('404.ejs');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
