'use strict';
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../src/app/login/login.html",
            controller: "login_Controller",

        })
        .when("/dashboard", {
            templateUrl: "dashboard.html",
            controller: "dashboard_Controller",
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "login_Controller",
        });

});
