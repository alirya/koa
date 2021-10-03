export {};
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
//# sourceMappingURL=property-validator.js.map