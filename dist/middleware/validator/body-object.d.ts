import Context from "../context/context";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function BodyObject<Ctx extends Context>(): ValidatorInterface<any, object, Instance<any>>;
