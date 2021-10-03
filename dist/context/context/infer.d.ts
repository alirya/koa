import Context from "../../middleware/context/context";
declare type Infer<Type> = Type extends Context<any, infer As> ? As : never;
export default Infer;
