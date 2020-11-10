import Context from "../../../middleware/context/context";
import ValidatorInterface from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default function BodyObjectNotEmpty<Ctx extends Context>(messages?: (messages: (Message & Validatable)[]) => any, type?: (object: Readonly<Validatable & Value>) => string, empty?: (object: Readonly<Validatable & Value<object>>) => string): ValidatorInterface<any, object, Instance<any>>;
