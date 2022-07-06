import Router from '@koa/router';
import {DefaultState, Next} from 'koa';
import Server from '../../../server.js';
import Register from '../../../../dist/router/register.js';
import Context from '../../../../dist/context/context.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('required for open and closed', ()=>{

    const server = Server();
    const router =  Register(
        server.koa,
        new Router<DefaultState, Context<unknown, string|undefined>>()
    );

    beforeAll(()=>server.open());
    afterAll(()=>server.close());
    /**
     * seems to be hardcoded to any
     */
    describe('body', () => {

        router.use(
            function (context , next: Next) {

            context.request.body = 'a';
            return next();
        }, function (context , next: Next) {

            context.request.body = 'a';
            return next();
        }
        );
    });

});
