import RequestPath from "../../../request-path";
import Axios, {AxiosResponse} from "axios";
import KoaBody from "koa-body";
import MiddlewareError from "../../../../dist/middleware/error-parameters";
import ErrorHandler from "../../../../dist/route/error";
import Debug from "../../../../dist/middleware/error-handler/debug-parameters";
import Server from "../../../server";
import Route from "../../../../dist/route/route";
import Router from "@koa/router";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    let rethrown : boolean = false;
    let response : AxiosResponse<{name : string, address : string}>;
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    const server = Server();
    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    // const router = Route(server.koa)({
    //     method : 'POST',
    //     path
    // })

    let router = new Router();



    let posts = new Router();

    // posts.get('/', (ctx, next) => {});
    // posts.get('/:pid', (ctx, next) => {});
    router.post(path, posts.routes(), posts.allowedMethods());

    // server.koa.use(router.routes());
    // server.koa.use(router.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
    server.koa.use(router.routes());

    it('add request', ()=>{

        posts.use(
            KoaBody(),
            MiddlewareError(Debug, Error),
            function (context, next) {

                throw new Error('error occurred');
            },
        );

        ErrorHandler(posts as any, Error)((error, context) => {

            rethrown = true;
        });

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, dataValue).then((data)=>{

            fail('response 500 should fail');

        }).catch((e)=>{
            console.log(e.response);
            response = e.response;
        }).finally(done);
    })

    it('assert value', function () {

        expect(rethrown).toBe(false);
        expect(response.status).toEqual(500);
        expect(response.data).toMatch(/^Error[\n\r]error occurred/);
        expect(response.statusText).toEqual('Internal Server Error');
    })

});
