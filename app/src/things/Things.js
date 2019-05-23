// Load the custom app ES6 modules

import ThingsDataService from 'src/things/services/ThingsDataService';

import ThingsList from 'src/things/components/list/ThingsList';
// import UserDetails from 'src/things/components/details/UserDetails';

// Define the AngularJS 'users' module

export default angular
  .module("things", ['ngMaterial'])

  .component(ThingsList.name, ThingsList.config)
//   .component(UserDetails.name, UserDetails.config)

  .service("ThingsDataService", ThingsDataService);
