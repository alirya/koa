import RequestPath from '../../request-path';
import Server from '../../server';
import Register from '../../../dist/router/register';
import Router from '@koa/router';
import {AxiosResponse} from 'axios';
import KoaBody from '@dikac/koa-body';
import ValidatorParameters from '../../../dist/middleware/validator-parameters';
import ContextValidator from './context-validator';
import Context from "../../../dist/context/context";
import Validator from "@alirya/validator/simple";
import Validatable from "@alirya/validator/validatable/validatable";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);


describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    let called1 : boolean = false;
    let called2 : boolean = false;

    let response : AxiosResponse<string>;

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            ValidatorParameters<Context>((ctx)=>ContextValidator(ctx) as Validatable<Context, string, true>, (context, next) => {

                context.request.body = 'invalid';
                return next();
            }),

            function (context, next) {

                context.response.body = 'valid';
                return next();
            },
        );
    });


});
