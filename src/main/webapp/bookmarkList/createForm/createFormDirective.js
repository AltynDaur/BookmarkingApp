(function(){
    angular.module("createForm").directive("createForm",createFormDirective);

    function createFormDirective(){
        return {
            restrict: "E",
            templateUrl: "/BookmarkingApp/bookmarkList/createForm/createFormTemplate.html",
            controller: "createFormController"
        };
    };
})();