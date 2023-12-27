import Context from '../../context/context.js';
import {Next} from "koa";
import FinishStatus from './finish-status.js';

/**
 * finish middleware if response code is success (2xx)
 */
export default function Finish(context : Context, next : Next) {

    FinishStatus()(context, next);
}
