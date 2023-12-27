import RequestPath from '../../request-path.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Router from '@koa/router.js';
import Axios, {AxiosResponse} from 'axios';
import KoaBody from '@dikac/koa-body.js';
import ValidatorParameters from '../../../dist/middleware/validator-parameters.js';
import ContextValidator from './context-validator.js';
import Context from '../../../dist/context/context.js';
import Validatable from '@axiona/validator/validatable/validatable.js';

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
            ValidatorParameters<Context>((ctx)=>ContextValidator(ctx, (context : Context) => (context.request.body as any).valid === true) as Validatable<Context, string, true>,
                function (context, next) {

                    context.response.body = 'valid';
                    return next();
                }, function (context, next) {

                    context.response.body = 'invalid';
                    return next();
                }
            )
        );
    });

    it('send true request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:true}).then((data)=>{

            expect(data.data).toBe('valid');

        }).catch(fail).finally(done);
    });

    it('send false request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, {valid:false}).then((data)=>{

            expect(data.data).toBe('invalid');


        }).catch(fail).finally(done);
    });


});
