//
// export default function BodyObjectNotEmpty<Ctx extends Context>(
//     messages : (messages : (Message & Validatable)[]) => any = MsgAnd,
//     type : (object: Readonly<Validatable & Value>) => string = ObjectMessage,
//     empty : (object: Readonly<Validatable & Value<object>>) => string = ObjectEmpty,
// ) : ValidatorInterface<any, object> {
//
//     let validators : ValidatorInterface<any, object>[] = [
//         new Object_(type) as ValidatorInterface<any, object>,
//         new NotEmpty(empty) as ValidatorInterface<any, object>,
//     ];
//
//     let validator = ValueAll(validators, And, messages);
//
//     return <ValidatorInterface<any, object>> validator;
// };

