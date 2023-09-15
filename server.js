const express = require(`express`);
const app = express();

const nunjucks = require(`nunjucks`);
app.set(`view engine`, `html`);
nunjucks.configure(`views`, { express: app });

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));

const router = require(`./src/index.js`);
app.use(router);

const boardRouter = require(`./src/board/board.route.js`);
app.use(`/boards`, boardRouter);

const userRouter = require(`./src/user/user.route.js`);
app.use(`/users`, userRouter);

app.listen(8080, () => {
  console.log(`SERVER LISTENING ON PORT 8080`);
});
