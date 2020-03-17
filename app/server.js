import Koa from 'koa';
import router from "./middleware/router";

const app = new Koa();

const PORT = process.env.SERVER_PORT || 3000;

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT);
