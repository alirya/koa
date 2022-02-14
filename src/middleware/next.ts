import {Middleware} from "koa";

export default <Middleware> function Next (context, next) {

    return next();
}
