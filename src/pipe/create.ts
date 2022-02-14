import Router from '@koa/router';
import Pipe from "./pipe";
import Context from "../context/context";
import State from "../context/state/infer";

export default function Create<CustomMain extends Context>(
    router : Router<State<CustomMain>, CustomMain>,
) : Pipe<CustomMain> {

    return function (middleware) {

        router.use(middleware);

        return Create(router);

    } as Pipe<CustomMain>;

}




















