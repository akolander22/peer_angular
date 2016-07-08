angular.module('toDoListApp', []);

angular.module('toDoListApp').controller('MainController', function($scope){
  var logList = [];

  $scope.handleClick = function(){
    logList.push($scope.toDo)
    // console.log($scope.toDo);
  }
  $scope.logList = logList;

  $scope.removeClick = function(item){
    // console.log(item);
    logList.splice(logList.indexOf(item),1);
  }
})
