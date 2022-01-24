import RequestPath from '../../request-path';
import Server from '../../server';
import Register from '../../../dist/route/register';
import Router from '@koa/router';
import {AxiosResponse} from 'axios';
import KoaBody from 'koa-body';
import Passthroughs from '../../../dist/middleware/passthroughs';
import ValidatorParameters from '../../../dist/middleware/validator-parameters';
import ContextValidator from './context-validator';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);


describe('test', () => {

    const server = Server();
    const router =  Register(server.koa, new Router());

    let called1 : boolean = false;
    let called2 : boolean = false;

    let response : AxiosResponse<string>;

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            ValidatorParameters(ContextValidator, (context, next) => {

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
