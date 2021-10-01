import PropertyFilter from "./property-filter";
/**
 * filter response body data
 *
 * @param filter
 */
// export default function BodyFilter<
//     BodyType = unknown,
//     ResponseType extends Response & Body<BodyType> = Response & Body<BodyType>,
//     Return extends ResponseType['body'] = ResponseType['body'],
// >(
//     filter : (body : Response['body'], context: Context) => Return,
// ) : Middleware {
//
//     return PropertyFilter<ResponseType, BodyType>( filter, 'body');
// }
export default function BodyFilter(filter) {
    return PropertyFilter(filter, 'body');
}
//# sourceMappingURL=body-filter.js.map