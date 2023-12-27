import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import Response from '@axiona/http/response/response.js';
import Context from '../context/context.js';
import FromResponseParameters from './from-response-parameters.js';

export default function FromResponseParameter<Subject extends Value & Validatable & Message<string>>(
    {
        context,
        response
    } : {
        context : Context,
        response : Response,
    }
) {

    FromResponseParameters(context, response);
}
