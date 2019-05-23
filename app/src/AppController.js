/**
 * Main App Controller for the AngularJS Material Starter App
 * @param ThingsDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(ThingsDataService, $mdSidenav) {
  var self = this;

  self.selected = null;
  self.things = [];
  self.selectThing = selectThing;
  self.toggleList = toggleThingsList;

  // Load all registered users

  ThingsDataService
    .loadAllThings()
    .then(function (things) {
      self.things = [].concat(things);
      self.selected = things[0];
    });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleThingsList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectThing(thing) {
    self.selected = angular.isNumber(thing) ? $scope.things[thing] : thing;
  }
}

export default ['ThingsDataService', '$mdSidenav', AppController];
