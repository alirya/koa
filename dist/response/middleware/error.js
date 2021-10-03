var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function Error(instance, middleware, rethrow = false) {
    if (!middleware) {
        return Error(globalThis.Error, instance, rethrow);
    }
    return function (context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield next();
            }
            catch (error) {
                if (error instanceof instance) {
                    middleware(error, context);
                }
                if (rethrow) {
                    throw error;
                }
            }
        });
    };
}
//# sourceMappingURL=error.js.map