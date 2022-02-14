import RequestPath from "../../request-path";
import Server from "../../server";
import Register from "../../../dist/router/register";
import ApplicationContext from "../../../dist/context/context";
import Router from "@koa/router";
import Axios, {AxiosResponse} from "axios";
import KoaBody from "@dikac/koa-body";
import ConditionalParameters from "../../../dist/middleware/conditional-parameters";
import ConditionalParameter from "../../../dist/middleware/conditional-parameter";
import {DefaultContext, DefaultState} from "koa";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('parameters', () => {

    const server = Server();
    const router =  Register<ApplicationContext<DefaultState, DefaultContext, {valid:boolean}, {valid:boolean, callback:string}>>(server.koa, new Router());

    let response : AxiosResponse<string>;

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            ConditionalParameters(
                context => context.request.body.valid,
            function (context, next) {

                context.response.body = {
                    valid: true,
                    callback : 'valid'
                }
                return next();
            },
            function (context, next) {

                context.response.body = {
                    valid: false,
                    callback : 'invalid'
                }
                return next();
            })
        );


    });

    it('send true request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:true}).then((data)=>{

            expect(data.data.valid).toBe(true);
            expect(data.data.callback).toBe('valid');

        }).catch(fail).finally(done);
    });

    it('send false request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:false}).then((data)=>{

            expect(data.data.valid).toBe(false);
            expect(data.data.callback).toBe('invalid');

        }).catch(fail).finally(done);
    });
});


describe('parameter', () => {

    const server = Server();
    const router =  Register<ApplicationContext<DefaultState, DefaultContext, {valid:boolean}, {valid:boolean, callback:string}>>(server.koa, new Router());

    let response : AxiosResponse<string>;

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    it('add request', ()=>{

        router.post(path,
            KoaBody(),
            ConditionalParameter({
                validation : context => context.request.body.valid,
                valid : function (context, next) {

                    context.response.body = {
                        valid: true,
                        callback: 'valid'
                    }
                    return next();
                },
                invalid : function (context, next) {

                    context.response.body = {
                        valid: false,
                        callback: 'invalid'
                    }
                    return next();
                }
            })
        );


    });

    it('send true request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:true}).then((data)=>{

            expect(data.data.valid).toBe(true);
            expect(data.data.callback).toBe('valid');

        }).catch(fail).finally(done);
    });

    it('send false request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:false}).then((data)=>{

            expect(data.data.valid).toBe(false);
            expect(data.data.callback).toBe('invalid');

        }).catch(fail).finally(done);
    });
});
