import {Middleware} from "@koa/router";
import GenericBodyFilter from "../../middleware/property-filter";
import {Request} from "koa";

export default function BodyFilter<
    Body = unknown,
    Property extends keyof Request = keyof Request,
    Return extends Request[Property] = Request[Property],
>(
    filter : (body : Request[Property]) => Return,
    property : Property
) : Middleware {

    return GenericBodyFilter('request', filter, property);
}
