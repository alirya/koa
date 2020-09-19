import Koa from "koa";
import Config from "./config";


const koa : Koa = new Koa();
const config = Config;

const server = koa.listen(config.port);

function disconnect() {

    server.close();
}

export default {
    server : server,
    koa : koa,
    config : Config
};

//do something when app is closing
process.on('exit', disconnect);

//catches ctrl+c event
process.on('SIGINT', disconnect);

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', disconnect);
process.on('SIGUSR2', disconnect);

// catch kill
process.on('SIGTERM', disconnect);

//catches uncaught exceptions
process.on('uncaughtException', disconnect);
