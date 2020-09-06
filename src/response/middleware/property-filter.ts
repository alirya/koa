import {Middleware} from "@koa/router";
import GenericBodyFilter from "../../middleware/property-filter";
import {Response} from "koa";

export default function PropertyFilter<
    RequestType extends Response,
    Body = unknown,
    Property extends keyof RequestType = keyof RequestType,
    Return extends RequestType[Property] = RequestType[Property],
>(
    filter : (body : RequestType[Property]) => Return,
    property : Property
) : Middleware {

    return GenericBodyFilter('response', filter, <keyof Response>property);
}
