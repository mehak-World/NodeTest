const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Web App successfully deployed on Microsoft Azure!");
});

app.listen(PORT, () => {
console.log("The server is running");
})
