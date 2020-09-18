export default function FromResponse(context, response) {
    context.response.set(response.header);
    context.response.body = response.body;
    context.response.status = response.code;
    context.response.message = response.message;
}
//# sourceMappingURL=from-response.js.map