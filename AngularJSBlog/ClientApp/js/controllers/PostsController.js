/* Setup blank page controller */
angular.module('MetronicApp').controller('PostsController', ['$rootScope', '$scope','$http', 'settings', function($rootScope, $scope, $http, settings) {
    $scope.$on('$viewContentLoaded', function () {
        $http.get("/api/posts").then(function (response) {
            $scope.records = response.data;
        });
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
