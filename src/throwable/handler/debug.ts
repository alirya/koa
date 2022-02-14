import FromResponseParameters from '../../response/from-response-parameters';
import InternalServerError from '@alirya/http/response/internal-server-error-parameter';
import ContentTypeTextUtf8 from '../../object/content-type-text-utf8';
import Name from '@alirya/object/string/name';
import Context from '../../context/context';

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

    FromResponseParameters(context, InternalServerError({
        headers : ContentTypeTextUtf8,
        body : [Name(error), error.message, error.stack].join('\n')
    }));

}
