require("dotenv").config(".env");
const Koa = require("koa");
const router = require("./routes");
const app = new Koa();
const response = require("./middlewares/response");
const cors = require("./middlewares/cors.js");
const bodyParser = require("koa-bodyparser");

app
  .use(bodyParser())
  .use(cors.allowAll)
  .use(response)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
