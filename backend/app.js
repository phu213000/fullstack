const express = require("express"); // express la mot framework giup cho viec tao server tro nen de dang hon
const cors = require("cors"); // cors la mot middleware giup cho server co the chia se du lieu voi cac domain khac

const app = express(); // tao server
app.use(cors()); // su dung cors
app.use(express.json()); // su dung json

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
