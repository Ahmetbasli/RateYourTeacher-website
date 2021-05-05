const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost/myProjectDatas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDb");
}

main();
