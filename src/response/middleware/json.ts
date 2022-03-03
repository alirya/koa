import Context from '../../context/context';
import {Next} from 'koa';
import String from '@alirya/string/boolean/string';
import ContentTypeJson from "@alirya/http/headers/header/content-type-json";

/**
 * @deprecated
 * set appropriate header for JSON if body is already JSON string
 *
 * @warning
 * this only check the body data type, and does not validate
 * string json
 */
export default function Json<
    ContextType extends Context,
>(
    context : ContextType,
    next : Next
) {

    if(String(context.response.body)) {

        context.response.set(ContentTypeJson);
    }

    return next();
}
