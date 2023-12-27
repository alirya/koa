import Context from '../context.js';


type Infer<Type> = Type extends Context<any, infer As> ? As : never;
export default Infer;
