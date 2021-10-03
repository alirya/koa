export {};
// export default function BodyObject<Ctx extends Context>(
//     messages : (messages : (Message & Validatable)[]) => any = MsgAnd,
//     type : (object: Readonly<Validatable & Value>) => string = ObjectMessage,
// ) : ValidatorInterface<any, object> {
//
//     let validators : ValidatorInterface<any, object>[] = [
//         new Object_(type) as ValidatorInterface<any, object>,
//     ];
//
//     let validator = ValueAll(validators, And, messages);
//
//     return <ValidatorInterface<any, object>> validator;
// };
//# sourceMappingURL=body-object.js.map