import Router from '@koa.js/router.js';
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

        const pipe : Pipe = Route(router , {path: '/', method:'post'});


        const parser :
            Middleware<
                Context<Body<string>>,
                Context<Body<string>>
                >
            =
            function (context , next: Next) {

                context.request.body = 'a.js';
                return next();
            };

        const pipe2 = pipe(parser);

        const pipe3 = pipe2(function (context, next) {

            const string : string = context.request.body;

            // @ts-expect-error
            const number : number  = context.request.body;

            // @ts-expect-error
            const object : object  = context.request.body;

            // @ts-expect-error
            const strings : string[]  = context.request.body;

        });

        const pipe4 = pipe3(parser)(function (context, next) {

            const string : string = context.request.body;

            // @ts-expect-error
            const number : number  = context.request.body;

            // @ts-expect-error
            const object : object  = context.request.body;

            // @ts-expect-error
            const strings : string[]  = context.request.body;

        });
    });

});
