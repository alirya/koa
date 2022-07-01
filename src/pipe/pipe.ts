import Middleware from '../middleware/middleware';
import ApplicationContext from '../context/context';
import Context from '../context/context';


export default interface Pipe<Custom extends Context = Context>  {

    <CustomNext extends ApplicationContext>(
        middleware : Middleware<Custom, CustomNext>
    ) : Pipe<CustomNext>;
}
