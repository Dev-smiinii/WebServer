const express = require(`express`);
const app = express();

const nunjucks = require(`nunjucks`);
app.set(`view engine`, `html`);
nunjucks.configure(`views`, { express: app });

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`ROUTING TO ROOT`);
});

app.listen(8080, () => {
  console.log(`SERVER LISTENING ON PORT 8080`);
});
