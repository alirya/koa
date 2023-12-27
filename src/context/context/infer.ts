import Context from '../context.js';


type Infer<Type> = Type extends Context<any, any, any, infer As> ? As : never;
export default Infer;
