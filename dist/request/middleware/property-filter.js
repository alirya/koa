import GenericBodyFilter from "../../middleware/property-filter";
export default function PropertyFilter(filter, property) {
    return GenericBodyFilter('request', filter, property);
}
//# sourceMappingURL=property-filter.js.map