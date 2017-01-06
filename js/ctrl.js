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
		$scope.academicPubArray = $scope.getData('academicPubArray');
		$scope.nonAcademicPubArray = $scope.getData('nonAcademicPubArray');

		$scope.skillMaxVote = _.max($scope.linkedinSkills, function(skill){ return skill.votes; });
	}]);

	app.directive('ngResumeRow', ['staticDataService', function(staticDataService) {

	return {
		restrict: 'E',
		scope: {
			item: '='
		}, //TemplateURL CAN'T BE USED, NOT ALLOWED ON STATIC SITES! ONLY FOR HTTP SERVERS, you can use http-server nodejs
		template: '<div class="row item"><div class="twelve columns"><img ng-src="{{item.imgUrl}}" height="70" width="100" class="pull-left" /><h3>{{item.name}}</h3><p class="info">{{item.role}} <span>&bull;</span> <em class="date">{{item.period}}</em></p><p>{{item.description}}</p><div ng-if="item.groups"><h6>Groups and Activities</h6><p ng-repeat="group in item.groups"><img ng-src="{{::group.imageUrl}}" alt="{{group.acronym}}" height="42" width="60" class="pull-left"/><span><a href="{{::group.url}}">{{::group.name}} ({{::group.acronym}}) </a></span><span>{{::group.description}}</span></p></div></div></div>'
		
	 }

	}]);

})(window.angular);