import Set from "../../../../event/dist/set/set";
import Callable from "../../../../function/dist/callable";
import Priority, {PriorityValue} from "@alirya/set/priority";
import Once, {OnceValue} from "@alirya/set/once";
import EventType from "../event";
import Server from "../../server/server";
import {List} from "ts-toolbelt";

export default function Event<
    Keys extends PropertyKey[],
    Container extends object,
    Type extends Record<List.UnionOf<Keys>, EventType>
>(
    ...keys : Keys
) :  Record<List.UnionOf<Keys>, EventType> {

    const record : Partial<Record<List.UnionOf<Keys>, EventType>> = {};

    for(const key of keys) {

        record[key] = Set();
    }

    return record as Record<List.UnionOf<Keys>, EventType>;

}