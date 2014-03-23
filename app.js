'use strict';

function HelloController($scope) {
    $scope.name = 'Angular';
}

function EventsController($scope) {
    $scope.clicksCount = 0;
    $scope.click = function click() {
        this.clicksCount++;
    }
}

function TasksController($scope) {
    $scope.tasks = [{label: 'Say hello', done: false}];
    $scope.createNewTask = function createNewTask() {
        $scope.newTask = {label: '', done: false};
    };
    $scope.saveNewTask = function saveNewTask() {
        $scope.tasks.push($scope.newTask);
        delete $scope.newTask;
    };
    $scope.cancelTaskCreation = function cancelTaskCreation() {
        delete $scope.newTask;
    };
    $scope.isNewTaskValid = function isNewTaskValid() {
        return $scope.newTask &&  $scope.newTask.label.trim().length > 0;
    };
    $scope.deleteTask = function deleteTask(task) {
        var index = $scope.tasks.indexOf(task);
        if (index > -1) {
            $scope.tasks.splice(index, 1);
        }
    };
}

angular.module('test', []).config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/hello', {templateUrl: 'hello.html', controller: HelloController}).
                when('/events', {templateUrl: 'events.html', controller: EventsController}).
                when('/tasks', {templateUrl: 'tasks.html', controller: TasksController}).
                otherwise({redirectTo: '/hello'});
            }
    ]);

function NavBarController($scope, $location) {
    $scope.isHello = function isHello() {
        return $location.path() == '/hello';
    };
    $scope.isEvents = function isEvents() {
        return $location.path() == '/events';
    };
    $scope.isTasks = function isTasks() {
        return $location.path() == '/tasks';
    };
}