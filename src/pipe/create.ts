import Router from '@koa/router';
import Pipe from './pipe.js';
import Context from '../context/context.js';
import State from '../context/state/infer.js';

export default function Create<CustomMain extends Context>(
    router : Router<State<CustomMain>, CustomMain>,
) : Pipe<CustomMain> {

    return function (middleware) {

        router.use(middleware);

        return Create(router);

    } as Pipe<CustomMain>;

}




















