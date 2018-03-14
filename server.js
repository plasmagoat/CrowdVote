const express = require('express');

let app = express();

app.use(express.static('./public'));

app.listen(8000);
console.log("Server running on port 3000");