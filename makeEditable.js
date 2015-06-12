angular.module('myApp', [])
	.directive('makeEditable', function() {
		return {
			restrict: 'A',
			templateUrl: 'make-editable.html',
			transclude: true,
			scope: true,
			link: function($scope, element, attrs) {
				$scope.editable = false;
				$scope.button = "Edit";
				$scope.toggle = function() {
					if ($scope.editable) {
						$scope.editable = false;
						$scope.button = "Edit";
					} else {
						$scope.editable = true;
						$scope.button = "Save";
					}
				}
			}
		}
	})