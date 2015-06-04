(function(){
    angular.module("Bookmarking",['bookmarkList','ngRoute']).config(appConfig);

    function appConfig($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: '/BookmarkingApp/bookmarkList/bookmarkListTemplate.html',
                controller: 'bookmarkListController'
            }).
            when('/:filter', {
                templateUrl: '/BookmarkingApp/bookmarkList/bookmarkListTemplate.html',
                controller: 'bookmarkListController'
            }).
            otherwise({
                redirectTo: '/'
            });
    };
})();