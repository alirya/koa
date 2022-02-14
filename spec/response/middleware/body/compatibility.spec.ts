import Body from "../../../../dist/response/middleware/body-parameters";
import Router from "@koa/router";
import Context from "../../../../dist/context/context";
import State from "../../../../dist/context/state/infer";
import CreatePipe from "../../../../dist/pipe/create";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

describe('koa router', ()=>{

    const router =  new Router<State<Context>, Context>();

    it('router chain', () => {

        router.use(Body(function (context) : Promise<string> {

            return Promise.resolve('');

        }), function (context, next) {

            const string : string = context.response.body;

            const number : number = context.response.body;
        });

    });
});


describe('pipe', ()=>{

    function C<C extends Context>() {
        return new Router<State<C>, C>();
    }

    const pipe =  CreatePipe<Context>(new Router());

    it('router chain', () => {


        pipe(Body(function (context) : Promise<number> {

            return Promise.resolve(1);

        }))

        (function (context, next) {

            // @ts-expect-error
            const string : string = context.response.body;

            const number : number = context.response.body;

        })

        (Body(function (context) : Promise<string> {

            return Promise.resolve('1');

        }))

        (function (context, next) {

            const string : string = context.response.body;

            // @ts-expect-error
            const number : number = context.response.body;
        });

    });
})
