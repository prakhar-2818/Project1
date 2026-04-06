require("dotenv").config();
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req,res)=>{
    res.send("API Running 🚀");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("🚀 Server running on port " + PORT);
});