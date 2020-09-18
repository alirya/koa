import GenericBodyFilter from "../../middleware/property-filter";
/**
 * filter response property
 *
 * @param filter
 * @param property
 */
export default function PropertyFilter(filter, property) {
    return GenericBodyFilter('response', filter, property);
}
//# sourceMappingURL=property-filter.js.map