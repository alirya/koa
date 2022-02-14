import Context from '../context';


type Infer<Type> = Type extends Context<infer As> ? As : never;
export default Infer;
