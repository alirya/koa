import Context from '../context';
import {Object} from "ts-toolbelt";


type Replace<Type extends Context, ResponseBody> = Object.P.Omit<Type, ['request', 'body']> & {request:{body:ResponseBody}};

export default Replace;
