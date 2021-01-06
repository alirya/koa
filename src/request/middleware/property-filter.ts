import {Middleware} from "koa";
import GenericPropertyFilter from "../../middleware/property-filter";
import {Request} from "koa";

export default function PropertyFilter<
    RequestType extends Request,
    Body = unknown,
    Property extends keyof RequestType = keyof RequestType,
    Return extends RequestType[Property] = RequestType[Property],
>(
    filter : (body : RequestType[Property]) => Return,
    property : Property
) : Middleware {

    return GenericPropertyFilter('request', filter, <keyof Request>property);
}
