angular.module('F1FeederApp.controller', []).
controller('driversController', function($scope, ergastAPIservice) {
  $scope.nameFilter = null;
  $scope.driversList = [];

  ergastAPIservice.getDrivers().success(function (response) {
      //Dig into the responde to get the relevant data
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});
