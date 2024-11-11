var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html",
        controller: "homeController"
    })
    .when("/internet", {
        templateUrl: "views/wi_fi.html",
        controller: "wifiController"
    })
    .when("/internetDetail/:title", {
        templateUrl: "views/wi_fi_detail.html",
        controller: "wifiDetailController"
    })
    .when("/tv", {
        templateUrl: "views/tv_360.html",
        controller: "tvController"
    })
    .when("/tvDetail/:title", {
        templateUrl: "views/tv_360_detail.html",
        controller: "tvDetailController"
    })
    .when("/camera", {
        templateUrl: "views/camera.html",
        controller: "cameraController"
    })
    .when("/5g", {
        templateUrl: "views/5gViettel.html",
        controller: "5gViettelController"
    })
    .otherwise({ redirectTo: '/' });
});
