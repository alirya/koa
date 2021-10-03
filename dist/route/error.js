import ErrorHandler from "../middleware/error-handler/error";
export default class Error {
    constructor(koa, error) {
        this.koa = koa;
        this.error = error;
    }
    use(middleware) {
        this.koa.on('error', ErrorHandler(this.error, middleware));
        return this;
    }
}
//# sourceMappingURL=error.js.map