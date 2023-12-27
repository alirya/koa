import RequestPath from '../../request-path.js';
import Server from '../../server.js';
import Register from '../../../dist/router/register.js';
import Route from '../../../dist/pipe/route.js';
import Router from '@koa/router.js';
import KoaBody from '@dikac/koa-body.js';
import Axios from 'axios';
import Context from '../../../dist/context/context.js';
import PropertyReplaceParameters from '../../../dist/middleware/replace-parameters.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {


    const server = Server();
    const router =  Register<Context>(server.koa/* as Koa<DefaultState, Context>*/, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    const data = {
        name : 'john',
        age : 24
    };

    const address = 'address';

    let argument = {
        name: '',
        age: 0
    };

    let filtered = {
        name: '',
        address: ''
    };


    it('add filter', ()=>{

        Route(router, {path, method:'post'})
        (KoaBody())
        (PropertyReplaceParameters(function (body : { name: string, age: number }) : {name : string, address : string} {

            argument = body;

            return {
                name : body.name,
                address
            };

        }, 'request', 'body'))
        ((context, next) => {

            context.response.body = context.request.body;
        });
    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, data).then((data)=>{

            filtered = data.data;

        }).catch(fail).finally(done);
    });

    it('assert value', function () {

        expect(argument).toEqual(data);
        expect(filtered).toEqual({name:data.name, address});

    });

});
