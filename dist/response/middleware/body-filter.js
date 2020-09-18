import PropertyFilter from "./property-filter";
/**
 * filter response body data
 *
 * @param filter
 */
export default function BodyFilter(filter) {
    return PropertyFilter(filter, 'body');
}
//# sourceMappingURL=body-filter.js.map