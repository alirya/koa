export default class Route {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    use(middleware) {
        // @ts-ignore
        this.router.register(this.route.path, [this.route.method], middleware);
        // @ts-ignore
        return this;
    }
}
//# sourceMappingURL=route.js.map