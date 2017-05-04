var schoolApp = angular.module('schoolApp', []);

schoolApp.controller('PeopleController', function PeopleController($scope,$http) {
  $scope.pageTitle = "List of people in class"
  $scope.people = [];
  $scope.add_name = "";

  getTheData();

  setInterval(getTheData, 100)

  $scope.postTheData = function(){
    var req = {
       method: 'POST',
       url: '/people/',
       data: { name : $scope.add_name}
      }

    console.log('add the user: ', $scope.add_name)
    $http(req).then(function(response){
      getTheData();
    })


  }
  function getTheData(){
    $http({ method: 'GET', url: '/people/'})
    .then(function successCallback(response) {
          console.log(response.data);

          $scope.people = response.data;

          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          console.log("OH NO THERE WAS AN ERROR")

          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  }

});
