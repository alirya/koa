import KoaBody from '@dikac/koa-body.js';
import Axios from 'axios';
import RequestPath from '../../../request-path.js';
import {RandomIntegerParameters} from '@axiona/number/random-integer.js';
import Server from '../../../server.js';
import Register from '../../../../dist/router/register.js';
import Router from '@koa/router.js';
import Context from '../../../../dist/context/context.js';
import ResponseParameters from '../../../../dist/middleware/response-parameters.js';
import {OkParameter} from '@axiona/http/response/ok.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;
const path : string = RequestPath(__filename);


type User = {name : string, address : string};
type Id = {id : number};

describe('test', () => {

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    let response : any = {};
    let dataValue : User = {
        name : 'jhon',
        address : 'earth'
    };

    const payload : Id = {id:RandomIntegerParameters(0, 99999)};

    function data(data) : Promise<User & Id> {

        const id : {id:number} = data.request.body;

        return Promise.resolve(Object.assign(dataValue, id));
    }

    it('add filter', ()=>{

        router.post(path,
            KoaBody(),
            ResponseParameters((ctx)=>data(ctx).then(body=>OkParameter({body}))),
        );

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${server.config.port}${path}`, payload).then((data)=>{

            response = data.data;

        }).catch(fail).finally(done);
    });

    it('assert value', function () {

        const merged = Object.assign(dataValue, payload);
        expect(merged).toEqual(response);

    });

});
