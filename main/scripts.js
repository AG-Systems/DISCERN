var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/about", {
            templateUrl: "about.html"
        })
        .when("/data", {
            templateUrl: "data.html"
        })
        .when("/demo", {
            templateUrl: "demo.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/news", {
            templateUrl: "news.html"
        })
        .when("/services", {
            templateUrl: "services.html"
        })
        .otherwise({
            templateUrl: "home.html"
        });
});
