import ValueAll from "@dikac/t-array/validator/value-all";
import Object_ from "@dikac/t-object/validator/object";
import ObjectMessage from "@dikac/t-object/validatable/string/object";
import MsgAnd from "@dikac/t-array/message/message/list/invalid";
import And from "@dikac/t-array/validatable/and";
export default function BodyObject(messages = MsgAnd, type = ObjectMessage) {
    let validators = [
        new Object_(type),
    ];
    let validator = ValueAll(validators, And, messages);
    return validator;
}
;
//# sourceMappingURL=body-object.js.map