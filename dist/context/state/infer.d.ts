import Context from "../../middleware/context/context";
declare type Infer<Type> = Type extends Context<infer As> ? As : never;
export default Infer;
