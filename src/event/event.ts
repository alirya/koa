import Callable from "@axiona/function/callable.js";
import {PriorityValue} from "@axiona/set/priority.js";
import {OnceValue} from "@axiona/set/once.js";
import Server from "../server/server.js";


export default interface Event<
    ServerType extends  Server = Server,
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
> extends globalThis.Set<PriorityValue & OnceValue<Callable<[ServerType, ...Argument], Promise<any>|any>>> {


}
