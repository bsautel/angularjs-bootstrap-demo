'use strict';

function HelloController($scope) {
    $scope.name = 'Angular';
}

function EventsController($scope) {
    $scope.clicksCount = 0;
    $scope.click = function() {
        this.clicksCount++;
    }
}

angular.module('test', []).config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/hello', {templateUrl: 'hello.html', controller: HelloController}).
                when('/events', {templateUrl: 'events.html', controller: EventsController}).
                otherwise({redirectTo: '/hello'});
            }
    ]);

function NavBarController($scope, $location) {
    $scope.isHello = function() {
        return $location.path() == '/hello';
    };
    $scope.isEvents = function() {
        return $location.path() == '/events';
    };
}