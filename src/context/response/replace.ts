import Context from '../context.js';
import {Object} from 'ts-toolbelt';
import {List} from 'ts-toolbelt/out/List/List.js';
import {Key} from 'ts-toolbelt/out/Any/Key.js';


type Replace<
    ContextType extends Context,
    Properties extends List<Key>,
    Value
> = Object.P.Update<ContextType, ['response', ...Properties], Value>;

export default Replace;
