import Context from '../context';


type Infer<Type> = Type extends Context<infer As, any> ? As : never;
export default Infer;
