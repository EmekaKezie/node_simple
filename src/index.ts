import express from "express";

const app = express();
const PORT = 4001;

app.get("/", (req, res) => {
  res.send("Hello from Node.js running on IIS!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
