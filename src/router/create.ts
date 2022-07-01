import KoaRouter, {RouterOptions} from '@koa/router';
import ApplicationContext from '../context/context';
import State from '../context/state/infer';

export default function Create<
    CustomMain extends ApplicationContext = ApplicationContext
    >(
    options?: RouterOptions
) : KoaRouter<State<CustomMain>, CustomMain> {

    return new KoaRouter(options);
}
















