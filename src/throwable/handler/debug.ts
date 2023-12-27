import FromResponseParameters from '../../response/from-response-parameters.js';
import {InternalServerErrorParameter} from '@alirya/http/response/internal-server-error.js';
import ContentTypeTextUtf8 from '../../object/content-type-text-utf8.js';
import Name from '@alirya/object/string/name.js';
import Context from '../../context/context.js';

/**
 * print out error to response
 *
 * @param error
 * @param context
 * @constructor
 */
export default function Debug<
    Error  extends globalThis.Error,
    ContextType extends Context
>(
    error : Error,
    context: ContextType
) {

    FromResponseParameters(context, InternalServerErrorParameter({
        headers : ContentTypeTextUtf8,
        body : [Name(error), error.message, error.stack].join('\n')
    }));

}
