(function(){
    angular.module('bookmarkList').controller('bookmarkListController', bookmarkListController);

    function bookmarkListController($scope, $routeParams){
        $scope.filterString = $routeParams.filter;
        $scope.bookmarks = [
            {
                "url":"www.jquery.com",
                "title":"Jquery",
                "tagsString":"js, jquery"
            }
        ];
    };
})();