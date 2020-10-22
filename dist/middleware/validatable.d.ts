import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Context from "./context/context";
import { Middleware } from "koa";
export default function Validatable<Subject extends Value & Validatable & Message<string>, Arguments extends unknown[]>(subject: (context: Context, ...argument: Arguments) => Promise<Subject>, ...argument: Arguments): Middleware;
