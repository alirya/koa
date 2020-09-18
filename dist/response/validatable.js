export default function Validatable(context, validatable) {
    if (validatable.valid) {
        context.response.status = validatable.code;
        context.response.body = validatable.value;
    }
    else {
        context.response.status = validatable.code;
        context.response.body = validatable.message;
    }
}
//# sourceMappingURL=validatable.js.map