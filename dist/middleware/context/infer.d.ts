import * as Koa from "koa";
declare type Infer<Type> = Type extends Koa.Middleware<any, infer As> ? As : never;
export default Infer;
