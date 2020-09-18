import PropertyValidator from "./property-validator";
export default function BodyValidator(validator, failCode = 400) {
    return PropertyValidator(validator, 'body', failCode);
}
//# sourceMappingURL=body-validator.js.map