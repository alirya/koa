import StringStandard from "@dikac/t-string/validator/string-standard";
import MapAll from "@dikac/t-object/validator/map-all";
import AndRecord from "@dikac/t-object/validatable/and";
import InvalidMessageRecord from "@dikac/t-object/message/message/record/invalid";
import Router from "../../../router";
import KoaBody from "koa-body";
import BodyValidator from "../../../../dist/request/middleware/body-validator";
import MiddlewareError from "../../../../dist/response/middleware/error";
import Axios, {AxiosResponse} from "axios";
import ErrorHandler from "../../../../dist/route/error";
import RequestPath from "../../../request-path";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    let error : any;
    let rethrown : boolean = false;
    let response : AxiosResponse<{name : string, address : string}>|undefined;
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    it('add request', ()=>{

        Router.router.post(path,
            KoaBody(),
            MiddlewareError(Error, (error, context) => {

                context.response.status = 201;
                context.response.message = error.message;
                context.response.body = context.request.body;
            }, true),
            function (context, next) {

                throw new Error('error occurred "cannot be suppressed"');
            },
        );

        new ErrorHandler(Router.koa, Error).use((error, context) => {

            rethrown = true;
        });

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${Router.config.port}${path}`, dataValue).then((data)=>{

            response = data;

        }).catch((err)=>error = err).finally(done);
    })

    it('assert value', function () {

        expect(response).toEqual(undefined);
        expect(true).toBe(rethrown);
        expect(error.response.status).toEqual(500);
        expect(error.response.statusText).toEqual('Internal Server Error');

    })

});
