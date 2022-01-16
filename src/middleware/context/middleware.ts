import Koa from 'koa';
import InferState from '../state/infer';
import InferContext from './infer';
import InferResponse from '../response/infer';
import Context from './context';


type Middleware<Type extends Koa.Middleware = Koa.Middleware> = Context<
    InferState<Type>,
    InferContext<Type>,
    InferResponse<Type>
>;

