import KoaRouter, {RouterOptions} from '@koa/router.js';
import ApplicationContext from '../context/context.js';
import State from '../context/state/infer.js';

export default function Create<
    CustomMain extends ApplicationContext = ApplicationContext
    >(
    options?: RouterOptions
) : KoaRouter<State<CustomMain>, CustomMain> {

    return new KoaRouter(options);
}
















