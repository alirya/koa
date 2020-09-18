export default class Route {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    use(middleware) {
        this.router.register(this.route.path, [this.route.method], middleware);
    }
}
//# sourceMappingURL=route.js.map