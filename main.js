angular.module('Metrics', [])

angular.module('Metrics')
	.controller('metriccontroller', ['$scope', function($scope) {

		$scope.eventLog1 = [click, keydown];
		$scope.data = {
			click : 0,
			keydown : 0,

		};

	$scope.recordEvent = function(event) {
		$scope.eventLog.push(event);
	}



	}])
