import FromResponseParameters from '../../response/from-response-parameters';
import InternalServerError from '@alirya/http/response/internal-server-error-parameter';
import ContentTypeTextUtf8 from '../../object/content-type-text-utf8';
import Name from '@alirya/object/string/name';
import * as Koa from 'koa';
import Context from '../context/context';

/**
 * print out error to response
 *
 * @param error
 * @param context
 * @constructor
 */
export default function Debug<
    Error  extends globalThis.Error,
    State extends Koa.DefaultState,
    ContextType extends Koa.DefaultContext,
    ResponseBodyT = unknown
>(
    error : Error,
    context: Context<State, ContextType, ResponseBodyT>
) {

    FromResponseParameters(context, InternalServerError({
        headers : ContentTypeTextUtf8,
        body : [Name(error), error.message, error.stack].join('\n')
    }));

}
