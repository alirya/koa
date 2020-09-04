import Context from "../context/context";
import Value from "@dikac/t-array/validator/value";
import Object_ from "@dikac/t-object/validator/object";
import NotEmpty from "@dikac/t-object/validator/not-empty";
import ObjectMessage from "@dikac/t-object/validatable/string/object";
import ObjectEmpty from "@dikac/t-object/validatable/string/not-empty";
import MsgAnd from "@dikac/t-array/message/message/list/invalid";
import And from "@dikac/t-array/validatable/and";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function BodyObject<Ctx extends Context>() : ValidatorInterface<any, object, Instance<any>> {

    let validators : ValidatorInterface<any, object, Instance<any, string>>[] = [
        new Object_(ObjectMessage) as ValidatorInterface<any, object, Instance<any, string>>,
        new NotEmpty(ObjectEmpty) as ValidatorInterface<any, object, Instance<any, string>>,
    ];


    let validator = Value(validators, And, MsgAnd);

    return <ValidatorInterface<any, object, Instance<any>>> validator;
};

