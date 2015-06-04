(function(){
    angular.module("createForm").controller('createFormController', createFormController);

    function createFormController($scope){
        $scope.saveBookmark = function(){
            $scope.$parent.bookmarks.push($scope.bookmark);
        };
        $scope.clearAll = function () {

        };
    };
})();