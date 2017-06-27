let express = require('express');
let app = express();

const alwaysIndexHTML = function(req, res) {
  res.sendFile("index.html", { root: './dist' });
}

app.use('/', express.static('dist'));
app.use(alwaysIndexHTML);

let port = 3000;
if (process.argv.length && process.argv[2]){
  port = process.argv[2];
}

app.listen(port, () => console.log(`Running at: ${ port }!`));
