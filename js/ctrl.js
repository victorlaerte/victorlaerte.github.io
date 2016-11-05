(function(angular) {

    'use strict';

	var app = angular.module('ngResumeApp', []);

	app.controller('ResumeAppController',
	    ['$scope', 'langService', function($scope, langService) {

	    $scope.currentSection = 'home';

	    $scope.getKey = function(key) {
	    	
	    	return langService.get(key);
	    }
	}]);

	app.directive('ngResumeRow', ['langService', function(langService) {

	return {
		restrict: 'E',
		scope: {
			item: '='
		}, //TemplateURL CAN'T BE USED, NOT ALLOWED IN STATIC SITES! ONLY FOR HTTP SERVERS
		template: '<div class="row item"><div class="twelve columns"><h3>{{item.name}}</h3><p class="info">{{item.role}} <span>&bull;</span> <em class="date">{{item.period}}</em></p><p>{{item.description}}</p></div></div>'
	 }

	}]);

})(window.angular);