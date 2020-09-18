import ValueAll from "@dikac/t-array/validator/value-all";
import Object_ from "@dikac/t-object/validator/object";
import NotEmpty from "@dikac/t-object/validator/not-empty";
import ObjectMessage from "@dikac/t-object/validatable/string/object";
import ObjectEmpty from "@dikac/t-object/validatable/string/not-empty";
import MsgAnd from "@dikac/t-array/message/message/list/invalid";
import And from "@dikac/t-array/validatable/and";
export default function BodyObject(messages = MsgAnd, type = ObjectMessage, empty = ObjectEmpty) {
    let validators = [
        new Object_(type),
        new NotEmpty(empty),
    ];
    let validator = ValueAll(validators, And, messages);
    return validator;
}
;
//# sourceMappingURL=body-object.js.map