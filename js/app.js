var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){ 
   $routeProvider.
        when('/first',{
              templateurl: 'first.html',
              controller: 'firstController'
        }).
        when('/second',{
            templateUrl: 'second.html',
            controller: 'secondController'
        }).
        when('/third',{
            templateUrl : 'third.html',
            controller: 'thirdController'
        }).
        otherwise({
            redirectTo: '/first'
         });       
}]);

app.controller('firstController',function($scope){ 
   $scope.firstRes = 'Hi this first message';
});
app.controller('secondController',function($scope){
   $scope.secondRes = 'Hi this second message';
});
app.controller('thirdController',function($scope){
  // $scope.thirdRes = "";
});
