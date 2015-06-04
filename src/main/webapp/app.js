(function(){
    angular.module("Bookmarking",['bookmarkList','ngRoute']).config(appConfig);

    function appConfig($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: '/bookmarkList/bookmarkListTemplate.html',
                controller: 'bookmarkListController'
            }).
            when('/:filter', {
                templateUrl: '/bookmarkList/bookmarkListTemplate.html',
                controller: 'bookmarkListController'
            }).
            otherwise({
                redirectTo: '/'
            });
    };
})();