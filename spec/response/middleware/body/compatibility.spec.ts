import Router from "@koa/router";
import Context from "../../../../dist/context/context";
import State from "../../../../dist/context/state/infer";
import CreatePipe from "../../../../dist/pipe/create";
import ResponseParameters from "../../../../dist/middleware/response-parameters";
import OkParameter from "@alirya/http/response/ok-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

describe('koa router', ()=>{

    const router =  new Router<State<Context>, Context>();

    it('router chain', () => {

        router.use(ResponseParameters(function (context)  {

            return OkParameter({body:Promise.resolve('')});

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


        pipe(ResponseParameters(function (context) {

            return OkParameter({body:Promise.resolve(1)});

        }))

        (function (context, next) {

            // @ts-expect-error
            const string : string = context.response.body;

            const number : number = context.response.body;

        })

        (ResponseParameters(function (context) {

            return OkParameter({body:Promise.resolve('1')});

        }))

        (function (context, next) {

            const string : string = context.response.body;

            // @ts-expect-error
            const number : number = context.response.body;
        });

    });
})
