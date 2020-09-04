import * as Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import {Middleware} from "@koa/router";

export default class Route {

    constructor(
        public router : Router,
        public route : Method & Path
    ) {
    }

    use(middleware : Middleware) {

        this.router.register(this.route.path, [this.route.method], middleware);
    }

}
