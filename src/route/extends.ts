import {DefaultContext, DefaultState} from 'koa';
import Router from '@koa/router';

// export interface Type<StateT = DefaultState, CustomT = DefaultContext>  {
//
//     <StateR extends StateT, CustomR extends CustomT>(options ?: RouterOptions): Router<StateR, CustomR>;
// }


export default function Extends<
    StateT = DefaultState,
    CustomT = DefaultContext
>(
    from : Router<StateT, CustomT>,
    to : Router<StateT, CustomT>,
) : Router<StateT, CustomT> {

    return from.use(to.routes(), to.allowedMethods());
}
















