import StringStandard from "@dikac/t-string/validator/string-standard";
import MapAll from "@dikac/t-object/validator/map-all";
import AndRecord from "@dikac/t-object/validatable/and";
import InvalidMessageRecord from "@dikac/t-object/message/message/record/invalid";
import Router from "../../../router";
import KoaBody from "koa-body";
import BodyValidator from "../../../../dist/request/middleware/body-validator";
import Body from "../../../../dist/response/middleware/body";
import Axios from "axios";
import RequestPath from "../../../request-path";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

const path : string = RequestPath(__filename);

describe('test', () => {

    let response : any = {};
    let dataValue : {name : string, address : string} = {
        name : 'jhon',
        address : 'earth'
    };

    function data() : Promise<{name : string, address : string}> {

        return Promise.resolve(dataValue);
    }

    it('add filter', ()=>{

        Router.router.post(path,
            KoaBody(),
            Body(data),
        );

    });

    it('send request', function (done) {

        Axios.post(`http://localhost:${Router.config.port}${path}`, {}).then((data)=>{

            response = data.data;

        }).catch(fail).finally(done);
    })

    it('assert value', function () {

        expect(dataValue).toEqual(response);

    })

});
