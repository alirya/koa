import Validator from "@dikac/t-validator/validator";
import {Middleware} from "koa";
import {Request} from "koa";
import InternalServerError from "@dikac/t-http/response/internal-server-error";
import FromResponse from "../../response/from-response";
import Context from "../../middleware/context/context";
//
// export default function PropertyValidator<
//     ValidatorType extends Validator,
//     RequestType extends Request = Request,
// >(
//     validator : ValidatorType,
//     key : keyof RequestType,
//     failCode : number = 400,
// ) : Middleware {
//
//     return function (context: Context, next) {
//
//         try {
//
//             const validatable = validator.validate(context.request[key as keyof Request]);
//
//             if(validatable.valid) {
//
//                 return next();
//
//             } else {
//
//                 context.response.status = failCode;
//                 context.response.body = validatable.message;
//             }
//
//         } catch (error) {
//
//             FromResponse(context, InternalServerError({body:error}));
//         }
//
//     }
// }
