(function(angular) {

    'use strict';

	var app = angular.module('ngResumeApp', ['angular-flexslider']);

	app.controller('ResumeAppController',
	    ['$scope', 'staticDataService', function($scope, staticDataService) {

	    $scope.getData = function(key) {
	    	
	    	var data = staticDataService.get(key);
	    	return data;
	    };

	    $scope.getRandom = function(key) {
	    	
	    	var data = staticDataService.getRandom(key);
	    	return data;
	    };

	    $scope.calculateWidth = function(num) {

	    	var k = $scope.skillMaxVote.votes;

	    	var percent = (num/k)*100;

	    	return percent;
	    };

		$scope.setPortfolio = function(portfolio) {

			if ($scope.currentPortfolio) {
				$scope.currentPortfolio.closed = true;
			}

			portfolio.closed = !portfolio.closed;

			$scope.currentPortfolio = portfolio;
		};

		$scope.currentSection = 'home';
	    $scope.currentPortfolio = undefined;
	    $scope.portfolios = $scope.getData('portfolios');
	    $scope.quote = $scope.getRandom('quotes');
		$scope.testimonials =  $scope.getData('testimonials');
		$scope.linkedinSkills = $scope.getData('linkedin_skills');
		$scope.skillMaxVote = _.max($scope.linkedinSkills, function(skill){ return skill.votes; });
	}]);

	app.directive('ngResumeRow', ['staticDataService', function(staticDataService) {

	return {
		restrict: 'E',
		scope: {
			item: '='
		}, //TemplateURL CAN'T BE USED, NOT ALLOWED ON STATIC SITES! ONLY FOR HTTP SERVERS
		template: '<div class="row item"><div class="twelve columns"><h3>{{item.name}}</h3><p class="info">{{item.role}} <span>&bull;</span> <em class="date">{{item.period}}</em></p><p>{{item.description}}</p></div></div>'
	 }

	}]);

})(window.angular);