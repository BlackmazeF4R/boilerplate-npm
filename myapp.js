let express = require('express');
let app = express();
const PORT = 3000;

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/views/index.html');
})

app.use('/public',express.static(__dirname + '/public'))

app.listen(PORT, () =>
{
    console.log("Server is running");
})