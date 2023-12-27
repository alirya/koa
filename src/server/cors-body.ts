import Server from "./server.js";
import Standard from "./standard.js";
import Cors from "@koa/cors.js";
import KoaBody from "@dikac/koa-body.js";
import Method from "@axiona/http/request/method/enum/method.js";

export default function CorsBody(server : Server = new Standard()) {

    server.koa.use(Cors());
    server.koa.use(KoaBody({parsedMethods:[
            Method.PATCH,
            Method.POST,
            Method.PUT,
            Method.DELETE,
        ]}));

    return server;
}
