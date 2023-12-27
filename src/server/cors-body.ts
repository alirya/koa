import Server from './server.js';
import Standard from './standard.js';
import Cors from "@koa/cors";
import KoaBody from "@dikac/koa-body.js";
import Method from "@alirya/http/request/method/enum/method.js";

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