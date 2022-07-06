import Router from '@koa/router';
import {Next} from 'koa';
import Middleware from '../../../dist/middleware/middleware.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Context from '../../../dist/context/context.js';
import Route from '../../../dist/pipe/route.js';
import Pipe from '../../../dist/pipe/pipe.js';
import Body from '@alirya/http/body/body.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('required for open and closed', ()=>{

    const server = Server();
    const router =  Register<Context>(
        server.koa,
        new Router()
    );

    beforeAll(()=>server.open());
    afterAll(()=>server.close());
    /**
     * seems to be hardcoded to any
     */
    describe('body', () => {

        let pipe : Pipe = Route(router , {path: '/', method:'post'});


        const parser :
            Middleware<
                Context<Body<string>>,
                Context<Body<string>>
                >
            =
            function (context , next: Next) {

                context.request.body = 'a';
                return next();
            };

        let pipe2 = pipe(parser);

        let pipe3 = pipe2(function (context, next) {

            let string : string = context.request.body;

            // @ts-expect-error
            let number : number  = context.request.body;

            // @ts-expect-error
            let object : object  = context.request.body;

            // @ts-expect-error
            let strings : string[]  = context.request.body;

        });

        let pipe4 = pipe3(parser)(function (context, next) {

            let string : string = context.request.body;

            // @ts-expect-error
            let number : number  = context.request.body;

            // @ts-expect-error
            let object : object  = context.request.body;

            // @ts-expect-error
            let strings : string[]  = context.request.body;

        });
    });

});
