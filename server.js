const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
  res.send(`ROUTING TO ROOT`);
});

app.listen(8080, () => {
  console.log(`SERVER LISTENING ON PORT 8080`);
});
