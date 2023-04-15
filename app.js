const path = require('path');

const express = require('express')
    , app = express()
    , port = 3000
    ;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
