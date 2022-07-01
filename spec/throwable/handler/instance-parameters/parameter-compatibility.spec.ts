import DebugParameters from '../../../../dist/throwable/handler/debug';
import DebugParameter from '../../../../dist/throwable/handler/debug';
import ErrorParameters from '../../../../dist/middleware/error-instance-parameters';
import ErrorParameter from '../../../../dist/middleware/error-instance-parameter';
import Axios from 'axios';
import Server from '../../../server';
import Register from '../../../../dist/router/register';
import Router from '@koa/router';
import Context from '../../../../dist/context/context';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

class ErrorInstance extends Error {}

describe('check compatibility', () => {

    let responseParameters : string = '';
    let responseParameter : string = '';

    const error =  new ErrorInstance('error message test');

    const server = Server();
    const router =  Register<Context>(server.koa, new Router());

    beforeAll(()=>server.open());
    afterAll(()=>server.close());

    describe('parameters', () => {

        const path = '/parameters';

        router.use(ErrorParameters(DebugParameters, Error));

        router.post(path, ()=>{

            throw error;
        });

        it('send request', function (done) {

            Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

                fail('response 500 should fail');

            }).catch((e)=>{

                responseParameters = e.response.data as string;

            }).finally(done);
        });

    });

    describe('parameter', () => {

        const path = '/parameter';

        router.use(ErrorParameter({
            handler:DebugParameter,
            instance:Error
        }));

        router.post(path, ()=>{

            throw error;
        });

        it('send request', function (done) {

            Axios.post(`http://localhost:${server.config.port}${path}`, {}).then((data)=>{

                fail('response 500 should fail');

            }).catch((e)=>{

                responseParameter = e.response.data as string;

            }).finally(done);
        });

    });

    describe('compare', () => {

        it('send request', function () {

            expect(responseParameter).toBe(responseParameters);
        });

    });
});
