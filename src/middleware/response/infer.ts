import * as Koa from "koa";


type Infer<Type> = Type extends Koa.Middleware<any, infer As> ? As : never;
export default Infer;
