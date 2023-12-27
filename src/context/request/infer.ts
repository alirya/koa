import Context from '../context.js';


type Infer<Type> = Type extends Context<infer As> ? As : never;
export default Infer;
