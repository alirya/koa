import Context from '../context';
import {Object} from 'ts-toolbelt';
import {List} from 'ts-toolbelt/out/List/List';
import {Key} from 'ts-toolbelt/out/Any/Key';


type Replace<
    ContextType extends Context,
    Properties extends List<Key>,
    Value
> = Object.P.Update<ContextType, ['response', ...Properties], Value>;

export default Replace;
