/**
 * set response header
 */
export default function Header(headers) {
    return function (context, next) {
        context.response.set(headers);
        return next();
    };
}
// // test
//
// type s = (value:any) => any;
// type a = (value:any, value2: any) => any;
//
// const data : s & a = (value:any, value2: any) => {
//
//     return 1;
// }
//# sourceMappingURL=header.js.map