const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/index.html'))
  );

  app.use(express.static('../server.js'));