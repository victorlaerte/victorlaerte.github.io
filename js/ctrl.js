var app = angular.module('ngResumeApp', []);

app.controller('ResumeAppController',
    ['$scope', '$timeout', function($scope, $timeout) {

    $scope.currentSection = 'home';

}]);