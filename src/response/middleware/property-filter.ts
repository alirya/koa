import {Middleware} from "@koa/router";
import GenericBodyFilter from "../../middleware/property-filter";
import {Response} from "koa";

export default function PropertyFilter<
    Body = unknown,
    Property extends keyof Response = keyof Response,
    Return extends Response[Property] = Response[Property],
>(
    filter : (body : Response[Property]) => Return,
    property : Property
) : Middleware {

    return GenericBodyFilter('response', filter, property);
}
