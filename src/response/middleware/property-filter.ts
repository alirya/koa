// import {Middleware} from "koa";
// import GenericBodyFilter from "../../middleware/property-filter";
// import {Response} from "koa";
// import Context from "../../middleware/context/context";
//
// /**
//  *
//  * filter response property
//  *
//  * @param filter
//  * @param property
//  */
// export default function PropertyFilter<
//     RequestType extends Response,
//     Body = unknown,
//     Property extends keyof RequestType = keyof RequestType,
//     Return extends RequestType[Property] = RequestType[Property],
// >(
//     filter : (body : RequestType[Property], context: Context) => Return,
//     property : Property
// ) : Middleware {
//
//     return GenericBodyFilter('response', filter, <keyof Response>property);
// }
