import Router from "@koa/router";
import Path from "@dikac/t-http/request/path/path";
import Method from "@dikac/t-http/request/method/method";
import {Middleware} from "@koa/router";

export default class Route<StateType = any, CustomType = {}> {

    constructor(
        public router : Router<StateType, CustomType>,
        public route : Method & Path
    ) {
    }

    use(middleware : Middleware<StateType, CustomType>) {

        this.router.register(this.route.path, [this.route.method], middleware);
    }

}
