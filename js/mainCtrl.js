angular.module('friendsList')
.controller('mainCtrl', function($scope) {
  $scope.friends = ['jeff', 'dave', 'austin', 'jordan', 'john'];

    $scope.friendAdder = function(x){
      $scope.friends.push(x);
      $scope.adder="";
    }
})
