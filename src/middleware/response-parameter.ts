import Response from '@alirya/http/response/response.js';
import Context from '../context/context.js';
import Next from './next.js';
import Middleware from './middleware.js';
import ResponseParameters from './response-parameters.js';

/**
 * Options version of {@see ResponseParameters}
 */
/**
 * direct response value
 */
export default function ResponseParameter<
    ContextType extends Context,
    Subject extends Response,
>(  {
        response,
        middleware
    } : {
        response : Subject,
        middleware ?: Middleware
    }
) : Middleware<ContextType>;

/**
 * promise factory
 */
export default function ResponseParameter<
    ContextType extends Context,
    Subject extends Response,
>(  {
        response,
        middleware,
    } : {
        response : (context : ContextType) => Promise<Subject>,
        middleware ?: Middleware
    }
) : Middleware<ContextType>;

/**
 * response factory
 */
export default function ResponseParameter<
    ContextType extends Context,
    Subject extends Response,
>(  {
        response,
        middleware
    } : {
        response : (context : ContextType) => Subject,
        middleware ?: Middleware
    }
) : Middleware<ContextType>;

export default function ResponseParameter<
    ContextType extends Context,
    Subject extends Response,
>(  {
        response,
        middleware = Next,
    } : {
        response : Subject|((context : ContextType) => Promise<Subject>|Subject),
        middleware : Middleware,
    }
) : Middleware<ContextType> {

    return ResponseParameters<ContextType, Subject>(response as Subject, middleware);
}
