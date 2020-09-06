import {Middleware} from "@koa/router";
import {Response} from "koa";
import {Object} from "ts-toolbelt";
import Body from "@dikac/t-http/body/body";
import PropertyFilter from "./property-filter";

export default function BodyFilter<
    BodyType = unknown,
    ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>,
    Return extends Object.At<ResponseType,'body'> = Object.At<ResponseType,'body'>,
>(
    filter : (body : Object.At<Response,'body'>) => Return,
) : Middleware {

    return PropertyFilter<ResponseType, BodyType>( filter, 'body');
}
