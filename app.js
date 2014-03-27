'use strict';

var homeRoute = '/home';
var tasksRoute = '/tasks';

function HelloController($scope) {
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

angular.module('demo', ['ngRoute']).config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when(homeRoute, {templateUrl: 'home.html', controller: HelloController}).
                when(tasksRoute, {templateUrl: 'tasks.html', controller: TasksController}).
                otherwise({redirectTo: homeRoute});
            }
    ]);

function NavBarController($scope, $location) {
    $scope.isHello = function isHello() {
        return $location.path() == homeRoute;
    };
    $scope.isTasks = function isTasks() {
        return $location.path() == tasksRoute;
    };
}