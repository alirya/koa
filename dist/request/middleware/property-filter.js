import GenericPropertyFilter from "../../middleware/property-filter";
export default function PropertyFilter(filter, property) {
    // TODO FIX any casting
    return GenericPropertyFilter('request', filter, property);
}
//# sourceMappingURL=property-filter.js.map