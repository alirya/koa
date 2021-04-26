import {Middleware} from "koa";
import GenericPropertyFilter from "../../middleware/property-filter";
import {Request} from "koa";
import Context from "../../middleware/context/context";

export default function PropertyFilter<
    RequestType extends Request,
    Body = unknown,
    Property extends keyof RequestType = keyof RequestType,
    Return extends RequestType[Property] = RequestType[Property],
>(
    filter : (body : RequestType[Property], context: Context) => Return,
    property : Property
) : Middleware {

    // TODO FIX any casting
    return GenericPropertyFilter('request', filter as any, <keyof Request>property);
}

