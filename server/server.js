var express = require('express');
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 3000;

var server = express();

server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, 'public')));


server.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
})


