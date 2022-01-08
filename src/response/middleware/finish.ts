import Context from "../../middleware/context/context";
import {Next} from "koa";
import FinishStatus from "./finish-status";

/**
 * finish middleware if response code is success (2xx)
 */
export default function Finish(context : Context, next : Next) {

    FinishStatus()(context, next)
}
