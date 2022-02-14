import Context from '../context';
import {Object} from "ts-toolbelt";


type Replace<Type extends Context, ResponseBody> = Object.P.Omit<Type, ['response', 'body']> & {response:{body:ResponseBody}};

export default Replace;
