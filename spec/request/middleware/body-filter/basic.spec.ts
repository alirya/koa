import KoaBody from 'koa-body';
import BodyFilter from '../../../../dist/request/middleware/body-filter-parameters';
import Axios from 'axios';
import RequestPath from '../../../request-path';
import Server from '../../../server';
import Register from '../../../../dist/route/register';
import Router from '@koa/router';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {


    const server = Server();
    const router =  Register(server.koa, new Router());

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

        router.post(path,
            KoaBody(),

            BodyFilter(function (body : { name: string, age: number }) : {name : string, address : string} {

                argument = body;

                return {
                    name : body.name,
                    address
                };

            }),

            // set response
            (context, next) => {

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
