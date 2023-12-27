import Middleware from '../middleware/middleware.js';
import ApplicationContext from '../context/context.js';
import Context from '../context/context.js';


export default interface Pipe<Custom extends Context = Context>  {

    <CustomNext extends ApplicationContext>(
        middleware : Middleware<Custom, CustomNext>
    ) : Pipe<CustomNext>;
}
