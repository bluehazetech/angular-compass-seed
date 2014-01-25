'use strict';

angular.module('angularApp')
    .controller('ViewController', function ($scope) {
		$scope.$on('$viewContentLoaded', function () {
			var $view = angular.element(document.getElementById('appView')),
				$links = $view.find('a'),
				link, i = $links.length;

			for (; i-- ;) {
				link = $links.eq(i);
				link.attr('href', '#' + link.attr('href').replace('.html', ''));
			}
		});
    });
