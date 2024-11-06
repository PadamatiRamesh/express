const n = require("express"), t = require("body-parser"), r = require("path"), c = require("mongoose"), i = require("./routes/details"), e = n(), o = process.env.PORT || 3e3;
e.set("view engine", "ejs");
e.set("views", r.join(__dirname, "views"));
e.use(n.static(r.join(__dirname, "public")));
e.use(t.urlencoded({ extended: !0 }));
async function a() {
  try {
    await c.connect("mongodb://localhost:27017/travel"), console.log("Connected to MongoDB");
  } catch (s) {
    console.error("Error connecting to MongoDB:", s);
  }
}
a();
e.use("/", i);
e.listen(o, () => {
  console.log(`Server is running on http://localhost:${o}`);
});
