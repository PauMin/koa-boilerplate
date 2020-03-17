import * as fs from 'fs';
import * as path from 'path';
import Router from '@koa/router';

const routes = path.join('app/routes');
const router = new Router();

fs.readdir(routes, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        let routeName = '';

        if (routeName !== 'index') {
            path.basename(file);
        }

        const { routes, allowedMethods } = require(`../routes/${file}`);
        router.use(`${routeName}`, routes, allowedMethods);
    });
});

export default router;
